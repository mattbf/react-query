import { NextRequest } from "next/server";
import { faker } from "@faker-js/faker";

const generateRandomGitHubIssue = () => {
  const randomDate = faker.date.past();
  const randomUser = faker.internet.userName();
  const randomAvatarUrl = faker.internet.avatar();
  const randomTitle = faker.lorem.sentence();
  const randomBody = faker.lorem.paragraph();

  return {
    id: faker.number.int(),
    node_id: `MDU6SXNzdWU${faker.number.int()}`,
    url: faker.internet.url(),
    repository_url: faker.internet.url(),
    labels_url: faker.internet.url(),
    comments_url: faker.internet.url(),
    events_url: faker.internet.url(),
    html_url: faker.internet.url(),
    number: faker.number.int(),
    state: faker.helpers.arrayElement(["open", "closed"]),
    title: randomTitle,
    body: randomBody,
    user: {
      login: randomUser,
      id: faker.number.int(),
      node_id: faker.string.uuid(),
      avatar_url: randomAvatarUrl,
      gravatar_id: faker.string.uuid(),
      url: faker.internet.url(),
      html_url: faker.internet.url(),
      followers_url: faker.internet.url(),
      following_url: faker.internet.url(),
      gists_url: faker.internet.url(),
      starred_url: faker.internet.url(),
      subscriptions_url: faker.internet.url(),
      organizations_url: faker.internet.url(),
      repos_url: faker.internet.url(),
      events_url: faker.internet.url(),
      received_events_url: faker.internet.url(),
      type: faker.helpers.arrayElement(["User", "Organization"]),
      site_admin: faker.datatype.boolean(),
    },
    labels: [
      {
        id: faker.number.int(),
        node_id: `MDU6TGFiZWwyMDgwNDU5NDY${faker.number.int()}`,
        url: faker.internet.url(),
        name: faker.lorem.word(),
        description: faker.lorem.sentence(),
        color: faker.internet.color(),
        default: faker.datatype.boolean(),
      },
    ],
    assignee: {
      login: randomUser,
      id: faker.number.int(),
      node_id: faker.string.uuid(),
      avatar_url: randomAvatarUrl,
      gravatar_id: faker.string.uuid(),
      url: faker.internet.url(),
      html_url: faker.internet.url(),
      followers_url: faker.internet.url(),
      following_url: faker.internet.url(),
      gists_url: faker.internet.url(),
      starred_url: faker.internet.url(),
      subscriptions_url: faker.internet.url(),
      organizations_url: faker.internet.url(),
      repos_url: faker.internet.url(),
      events_url: faker.internet.url(),
      received_events_url: faker.internet.url(),
      type: faker.helpers.arrayElement(["User", "Organization"]),
      site_admin: faker.datatype.boolean(),
    },
    assignees: [
      {
        login: randomUser,
        id: faker.number.int(),
        node_id: faker.string.uuid(),
        avatar_url: randomAvatarUrl,
        gravatar_id: faker.string.uuid(),
        url: faker.internet.url(),
        html_url: faker.internet.url(),
        followers_url: faker.internet.url(),
        following_url: faker.internet.url(),
        gists_url: faker.internet.url(),
        starred_url: faker.internet.url(),
        subscriptions_url: faker.internet.url(),
        organizations_url: faker.internet.url(),
        repos_url: faker.internet.url(),
        events_url: faker.internet.url(),
        received_events_url: faker.internet.url(),
        type: faker.helpers.arrayElement(["User", "Organization"]),
        site_admin: faker.datatype.boolean(),
      },
    ],
    milestone: {
      url: faker.internet.url(),
      html_url: faker.internet.url(),
      labels_url: faker.internet.url(),
      id: faker.number.int(),
      node_id: faker.string.uuid(),
      number: faker.number.int(),
      state: faker.helpers.arrayElement(["open", "closed"]),
      title: faker.lorem.words(),
      description: faker.lorem.sentence(),
      creator: {
        login: randomUser,
        id: faker.number.int(),
        node_id: faker.string.uuid(),
        avatar_url: randomAvatarUrl,
        gravatar_id: faker.string.uuid(),
        url: faker.internet.url(),
        html_url: faker.internet.url(),
        followers_url: faker.internet.url(),
        following_url: faker.internet.url(),
        gists_url: faker.internet.url(),
        starred_url: faker.internet.url(),
        subscriptions_url: faker.internet.url(),
        organizations_url: faker.internet.url(),
        repos_url: faker.internet.url(),
        events_url: faker.internet.url(),
        received_events_url: faker.internet.url(),
        type: faker.helpers.arrayElement(["User", "Organization"]),
        site_admin: faker.datatype.boolean(),
      },
      open_issues: faker.number.int(),
      closed_issues: faker.number.int(),
      created_at: randomDate.toISOString(),
      updated_at: randomDate.toISOString(),
      closed_at: faker.date.recent().toISOString(),
      due_on: faker.date.future().toISOString(),
    },
    locked: faker.datatype.boolean(),
    active_lock_reason: faker.lorem.word(),
    comments: faker.number.int(),
    pull_request: {
      url: faker.internet.url(),
      html_url: faker.internet.url(),
      diff_url: faker.internet.url(),
      patch_url: faker.internet.url(),
    },
    closed_at: faker.date.recent().toISOString(),
    created_at: randomDate.toISOString(),
    updated_at: randomDate.toISOString(),
    repository: {
      id: faker.number.int(),
      node_id: faker.string.uuid(),
      name: faker.lorem.word(),
      full_name: faker.internet.userName(),
      owner: {
        login: randomUser,
        id: faker.number.int(),
        node_id: faker.string.uuid(),
        avatar_url: randomAvatarUrl,
        gravatar_id: faker.string.uuid(),
        url: faker.internet.url(),
        html_url: faker.internet.url(),
        followers_url: faker.internet.url(),
        following_url: faker.internet.url(),
        gists_url: faker.internet.url(),
        starred_url: faker.internet.url(),
        subscriptions_url: faker.internet.url(),
        organizations_url: faker.internet.url(),
        repos_url: faker.internet.url(),
        events_url: faker.internet.url(),
        received_events_url: faker.internet.url(),
        type: faker.helpers.arrayElement(["User", "Organization"]),
        site_admin: faker.datatype.boolean(),
      },
      private: faker.datatype.boolean(),
      html_url: faker.internet.url(),
      description: faker.lorem.sentence(),
      fork: faker.datatype.boolean(),
      url: faker.internet.url(),
      archive_url: faker.internet.url(),
      assignees_url: faker.internet.url(),
      blobs_url: faker.internet.url(),
      branches_url: faker.internet.url(),
      collaborators_url: faker.internet.url(),
      comments_url: faker.internet.url(),
      commits_url: faker.internet.url(),
      compare_url: faker.internet.url(),
      contents_url: faker.internet.url(),
      contributors_url: faker.internet.url(),
      deployments_url: faker.internet.url(),
      downloads_url: faker.internet.url(),
      events_url: faker.internet.url(),
      forks_url: faker.internet.url(),
      git_commits_url: faker.internet.url(),
      git_refs_url: faker.internet.url(),
      git_tags_url: faker.internet.url(),
      git_url: faker.internet.url(),
      issue_comment_url: faker.internet.url(),
      issue_events_url: faker.internet.url(),
      issues_url: faker.internet.url(),
      keys_url: faker.internet.url(),
      labels_url: faker.internet.url(),
      languages_url: faker.internet.url(),
      merges_url: faker.internet.url(),
      milestones_url: faker.internet.url(),
      notifications_url: faker.internet.url(),
      pulls_url: faker.internet.url(),
      releases_url: faker.internet.url(),
      ssh_url: faker.internet.url(),
      stargazers_url: faker.internet.url(),
      statuses_url: faker.internet.url(),
      subscribers_url: faker.internet.url(),
      subscription_url: faker.internet.url(),
      tags_url: faker.internet.url(),
      teams_url: faker.internet.url(),
      trees_url: faker.internet.url(),
      clone_url: faker.internet.url(),
      mirror_url: faker.internet.url(),
      hooks_url: faker.internet.url(),
      svn_url: faker.internet.url(),
      homepage: faker.internet.url(),
      language: null,
      forks_count: faker.number.int(),
      stargazers_count: faker.number.int(),
      watchers_count: faker.number.int(),
      size: faker.number.int(),
      default_branch: faker.lorem.word(),
      open_issues_count: faker.number.int(),
      is_template: faker.datatype.boolean(),
      topics: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
      has_issues: faker.datatype.boolean(),
      has_projects: faker.datatype.boolean(),
      has_wiki: faker.datatype.boolean(),
      has_pages: faker.datatype.boolean(),
      has_downloads: faker.datatype.boolean(),
      archived: faker.datatype.boolean(),
      disabled: faker.datatype.boolean(),
      visibility: faker.helpers.arrayElement(["public", "private"]),
      pushed_at: randomDate.toISOString(),
      created_at: randomDate.toISOString(),
      updated_at: randomDate.toISOString(),
      permissions: {
        admin: faker.datatype.boolean(),
        push: faker.datatype.boolean(),
        pull: faker.datatype.boolean(),
      },
      allow_rebase_merge: faker.datatype.boolean(),
      template_repository: null,
      temp_clone_token: faker.string.uuid(),
      allow_squash_merge: faker.datatype.boolean(),
      allow_auto_merge: faker.datatype.boolean(),
      delete_branch_on_merge: faker.datatype.boolean(),
      allow_merge_commit: faker.datatype.boolean(),
      subscribers_count: faker.number.int(),
      network_count: faker.number.int(),
      license: {
        key: faker.number.int(),
        name: faker.number.int(),
        url: faker.internet.url(),
        spdx_id: faker.string.uuid(),
        node_id: faker.string.uuid(),
        html_url: faker.internet.url(),
      },
      forks: faker.number.int(),
      open_issues: faker.number.int(),
      watchers: faker.number.int(),
    },
    author_association: faker.helpers.arrayElement(["OWNER", "MEMBER", "COLLABORATOR", "CONTRIBUTOR"]),
  };
};

export async function GET(_req: NextRequest) {
  const numberOfIssues = Math.floor(Math.random() * 20) + 10;
  const data: any = [];

  for (let i = 0; i < numberOfIssues; i++) {
    const newIssue = generateRandomGitHubIssue();
    data.push(newIssue);
  }

  //simulate a backend api
  await new Promise((resolve) => setTimeout(resolve, 200));

  return Response.json(data);
}
