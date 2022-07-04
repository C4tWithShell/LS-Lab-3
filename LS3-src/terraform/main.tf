provider "github" {
  token        = "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"
  owner = "MrRahmat"
}

resource "github_branch_protection" "example" {
  repository = "${github_repository.example.name}"
  branch = "master"
  enforce_admins = true

  required_status_checks {
    strict = false
    contexts = ["ci/travis"]
  }

  required_pull_request_reviews {
    dismiss_stale_reviews = true
    dismissal_users = ["foo-user"]
    dismissal_teams = ["${github_team.example.slug}", "${github_team.second.slug}"]
  }

  restrictions {
    users = ["foo-user"]
    teams = ["${github_team.example.slug}"]
  }
}

resource "github_team" "example" {
  name = "Example Name"
}

resource "github_team_repository" "example" {
  team_id    = "${github_team.example.id}"
  repository = "${github_repository.example.name}"
  permission = "pull"
}


