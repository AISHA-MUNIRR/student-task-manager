# Student Task Management System & Application

## Project Description

The Student Task Management System is a lightweight, responsive web application designed to help students organize, track, and manage their daily academic tasks and assignments effectively.

This repository serves as a collaborative demonstration project showcasing professional Git workflows, branch strategies, code reviews, and version control best practices.

## Team Members

- **Student 1 (Repo Owner / Lead Developer):** Aisha Munir (AISHA-MUNIRR)
- **Student 2 (Collaborator / UI Developer):** Ahmad Shah (Ahmad-Shah24)

## Features

- **Dynamic Task Creation:** Input forms to add new tasks with titles and details.
- **Responsive Task Styling:** Clean card-based UI with styled input controls and modern typography.
- **Task Management:** Organizes academic deadlines cleanly in an intuitive layout.
- **Cross-Browser Compatibility:** Styled using custom CSS properties for seamless rendering across devices.

## Technologies

- **HTML5:** Core markup structure for web elements.
- **CSS3:** Custom responsive layout using Flexbox, CSS Variables, and responsive UI cards.
- **JavaScript (Vanilla):** Dynamic interaction logic.
- **Git:** Version control and local branch management.
- **GitHub:** Remote repository hosting, Pull Requests, Code Reviews, Issue Tracking, and Release management.

## Git Workflow

This project utilizes a **Feature Branch Workflow**:

1. Main development occurs on feature-specific branches isolated from `main`.
2. Feature branches are pushed to GitHub upon completion.
3. Pull Requests (PRs) are opened for peer code review and approval.
4. Approved PRs are merged into `main` after resolving any potential conflicts.
5. Production builds are tagged as releases, such as `v1.0`.

## Branches

- **main:** Production-ready source code.
- **feature/task-form:** Developed by Student 1 to implement task input forms.
- **feature/task-style:** Developed by Student 2 to add custom styling using `style.css`.
- **conflict-student2:** Temporary branch used to simulate and resolve local merge conflicts.

## Git Commands Demonstrated

### Repository Setup

- `git init`
- `git clone`
- `git remote add`

### Branching & Switching

- `git branch`
- `git switch`
- `git switch -c`

### Staging & Committing

- `git status`
- `git add`
- `git commit -m`

### Syncing & Merging

- `git fetch`
- `git pull`
- `git merge`
- `git push`

### Inspection & History

- `git log --oneline --graph --all`
- `git diff`

### Recovery & Safety

- `git stash` / `git stash pop` — Saving uncommitted work.
- `git restore` — Discarding unwanted changes.
- `git reset --soft` — Undoing commits while keeping changes staged.
- `git revert` — Safely reversing past commits while maintaining forward history.

### Tagging

- `git tag -a`
- `git push origin <tag-name>`

## GitHub Features Demonstrated

- **Collaborator Access Management:** Inviting and accepting collaboration privileges.
- **Issue Tracking:** Creating, assigning, and linking feature tickets.
- **Pull Requests (PRs):** Requesting merges with automated diff inspections.
- **Code Reviews:** Formal approvals, feedback comments, and inline suggestions.
- **Merge Conflict Resolution:** Resolving overlapping code edits using GitHub and VS Code.
- **Releases & Tags:** Publishing versioned project milestones such as `v1.0`.
- **Insights & Network Graph:** Visualizing project history and contribution trees.

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/AISHA-MUNIRR/student-task-manager.git
