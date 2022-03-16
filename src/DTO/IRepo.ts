export interface IRepo {
    full_name: string;
    downloads_url: string;
}

// interface IRepo ={
//     allow_forking: boolean;
//     archive_url: "https://api.github.com/repos/facebook/react/{archive_format}{/ref}"
//     archived: false
//     assignees_url: "https://api.github.com/repos/facebook/react/assignees{/user}"
//     blobs_url: "https://api.github.com/repos/facebook/react/git/blobs{/sha}"
//     branches_url: "https://api.github.com/repos/facebook/react/branches{/branch}"
//     clone_url: "https://github.com/facebook/react.git"
//     collaborators_url: "https://api.github.com/repos/facebook/react/collaborators{/collaborator}"
//     comments_url: "https://api.github.com/repos/facebook/react/comments{/number}"
//     commits_url: "https://api.github.com/repos/facebook/react/commits{/sha}"
//     compare_url: "https://api.github.com/repos/facebook/react/compare/{base}...{head}"
//     contents_url: "https://api.github.com/repos/facebook/react/contents/{+path}"
//     contributors_url: "https://api.github.com/repos/facebook/react/contributors"
//     created_at: "2013-05-24T16:15:54Z"
//     default_branch: "main"
//     deployments_url: "https://api.github.com/repos/facebook/react/deployments"
//     description: "A declarative, efficient, and flexible JavaScript library for building user interfaces."
//     disabled: false
//     downloads_url: "https://api.github.com/repos/facebook/react/downloads"
//     events_url: "https://api.github.com/repos/facebook/react/events"
//     fork: false
//     forks: 37726
//     forks_count: 37726
//     forks_url: "https://api.github.com/repos/facebook/react/forks"
//     full_name: "facebook/react"
//     git_commits_url: "https://api.github.com/repos/facebook/react/git/commits{/sha}"
//     git_refs_url: "https://api.github.com/repos/facebook/react/git/refs{/sha}"
//     git_tags_url: "https://api.github.com/repos/facebook/react/git/tags{/sha}"
//     git_url: "git://github.com/facebook/react.git"
//     has_downloads: true
//     has_issues: true
//     has_pages: true
//     has_projects: true
//     has_wiki: true
//     homepage: "https://reactjs.org"
//     hooks_url: "https://api.github.com/repos/facebook/react/hooks"
//     html_url: "https://github.com/facebook/react"
//     id: 10270250
//     is_template: false
//     issue_comment_url: "https://api.github.com/repos/facebook/react/issues/comments{/number}"
//     issue_events_url: "https://api.github.com/repos/facebook/react/issues/events{/number}"
//     issues_url: "https://api.github.com/repos/facebook/react/issues{/number}"
//     keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}"
//     labels_url: "https://api.github.com/repos/facebook/react/labels{/name}"
//     language: "JavaScript"
//     languages_url: "https://api.github.com/repos/facebook/react/languages"
//     license: { key: 'mit', name: 'MIT License', spdx_id: 'MIT', url: 'https://api.github.com/licenses/mit', node_id: 'MDc6TGljZW5zZTEz' }
//     merges_url: "https://api.github.com/repos/facebook/react/merges"
//     milestones_url: "https://api.github.com/repos/facebook/react/milestones{/number}"
//     mirror_url: null
//     name: "react"
//     network_count: 37726
//     node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA=="
//     notifications_url: "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}"
//     open_issues: 960
//     open_issues_count: 960
//     organization: { login: 'facebook', id: 69631, node_id: 'MDEyOk9yZ2FuaXphdGlvbjY5NjMx', avatar_url: 'https://avatars.githubusercontent.com/u/69631?v=4', gravatar_id: '', … }
//     owner: { login: 'facebook', id: 69631, node_id: 'MDEyOk9yZ2FuaXphdGlvbjY5NjMx', avatar_url: 'https://avatars.githubusercontent.com/u/69631?v=4', gravatar_id: '', … }
//     private: false
//     pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}"
//     pushed_at: "2022-03-16T15:37:10Z"
//     releases_url: "https://api.github.com/repos/facebook/react/releases{/id}"
//     size: 175792
//     ssh_url: "git@github.com:facebook/react.git"
//     stargazers_count: 184369
//     stargazers_url: "https://api.github.com/repos/facebook/react/stargazers"
//     statuses_url: "https://api.github.com/repos/facebook/react/statuses/{sha}"
//     subscribers_count: 6642
//     subscribers_url: "https://api.github.com/repos/facebook/react/subscribers"
//     subscription_url: "https://api.github.com/repos/facebook/react/subscription"
//     svn_url: "https://github.com/facebook/react"
//     tags_url: "https://api.github.com/repos/facebook/react/tags"
//     teams_url: "https://api.github.com/repos/facebook/react/teams"
//     temp_clone_token: null
//     topics: (6)['declarative', 'frontend', 'javascript', 'library', 'react', 'ui']
//     trees_url: "https://api.github.com/repos/facebook/react/git/trees{/sha}"
//     updated_at: "2022-03-16T18:38:08Z"
//     url: "https://api.github.com/repos/facebook/react"
//     visibility: "public"
//     watchers: 184369
//     watchers_count: 184369

// }