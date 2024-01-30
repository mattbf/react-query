# react-query
notes on taking the ui.dev course for react-query.


# Why React Query?

**TL;DR**
Creating stateful UIs while fetching data from a server is repetitive and complex. React-query makes it simple.

### The history
*before*
The server would send data and the document.

*after AJAX*
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

### So what does react-query  help you do / do for you?
- Rendering the same data accross multiple components
- De-duplicating network requests
- Using a cache 👍
- Auto-refetching
- Pagination
- Updating local data when mutating remote data

A lot of apps use redux or mobx to store state and handle some of these things... except this treats server state and client state as the same thing.
