# react-query

notes on taking the ui.dev [course](https://query.gg/) for react-query.

# Why React Query?

**TL;DR**
Creating stateful UIs while fetching data from a server is repetitive and complex. React-query makes it simple.

### The history

_before_:
The server would send data and the document.

_after AJAX_:
A webpage could request more data without reloading the page and could happen automatically.

### Client state vs Server state

**Client state**

- Ephermeral
- Synchronous
- Client-owner

**Server State**

- Stored remotely
- Asynchronous
- Owned by many users
  -> means it could be out-of-date

### So what does react-query help you do / do for you?

- Rendering the same data accross multiple components
- De-duplicating network requests
- Using a cache 👍
- Auto-refetching
- Pagination
- Updating local data when mutating remote data

A lot of apps use redux or mobx to store state and handle some of these things... except this treats server state and client state as the same thing.

## Parallel Queries

```ts
function getReposAndGists(username) {
  return Promise.all([
    fetch(`https://api.github.com/users/${username}/repos`).then((res) => res.json()),
    fetch(`https://api.github.com/users/${username}/gists`).then((res) => res.json()),
  ]);
}
```

OR use `useQueries` and pass an array

## Dependent Queries

```ts
const labelsQuery = useQuery(["repos", owner, repo, "labels"], () =>
  fetch(`https://api.github.com/repos/${owner}/${repo}/labels`).then((res) => res.json())
);

const labels = labelsQuery.data;

const issuesQuery = useQuery(
  ["repos", owner, repo, "issues"],
  () => fetch(`https://api.github.com/repos/${owner}/${repo}/issues?labels=${labels[0].name}`).then((res) => res.json()),
  {
    enabled: !!labels,
  }
);
```

## fetching vs isLoading

Note that the fetching state is different from the loading state. A query only has the loading state the first time it loads and there's no data, while the fetching state is used by the query cache any time a query is refetched, including the first time.

## Default queries

```js
function queryGithub({ queryKey }) {
  const BASE_URL = `https://api.github.com/`;

  let queryParams = "";
  if (typeof queryKey[queryKey.length - 1] === "object") {
    const paramsObject = queryKey.pop();
    queryParams = "?" + new URLSearchParams(paramsObject).toString();
  }

  const apiPath = queryKey.join("/");
  const requestUrl = `${BASE_URL}${apiPath}${queryParams}`;

  return fetch(requestUrl).then((res) => res.json());
}
```

and then:

```js
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: queryGithub,
    },
  },
});
```

## Refetching vs Invalidating

queryClient.refetchQueries will force any queries that match the provided query key to refetch. This includes active, inactive, fresh, and stale queries. Yes, even those inactive queries that are just sitting in the cache not doing anything will be refetched.

queryClient.invalidateQueries, on the other hand, will only mark any fresh queries as stale, which automatically triggers a refetch. However, since React Query will never automatically refetch inactive queries, queryClient.invalidateQueries results in fewer queries refetching, which means less network traffic.

## Pre-fetching

- _Initial data_ will actually be put into the cash
- _Placeholder data_ will NOT

```js
const Navigation = () => {
  const queryClient = useQueryClient();
  return (
    <>
      <Link
        to="/dashboard"
        onMouseEnter={() => {
          queryClient.prefetchQuery(["dashboard"], fetchDashboard);
        }}
      >
        Dashboard
      </Link>
      <Link
        to="/billing"
        onMouseEnter={() => {
          queryClient.prefetchQuery(["billing"], fetchBilling);
        }}
      >
        Billing
      </Link>
      <Link
        to="/profile"
        onMouseEnter={() => {
          queryClient.prefetchQuery(["user"], fetchUser);
        }}
      >
        Profile
      </Link>
      <Link to="/settings">Settings</Link>
      <Link to="/logout">Logout</Link>
    </>
  );
};
```
