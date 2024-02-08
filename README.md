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
