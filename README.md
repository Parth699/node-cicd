This is a simple express app with ci/cd using github actions.

Workflow-v :
  - Using EC2 as a hosted runner to auto run test cases on push and PR to the main branch.
  - PM2 process is restarted in hosted runner.

Workflow-e :
  - Using github runner  to auto run test cases on push and PR to the main branch.
  - If previous step is successfull, build artifactes is auto deployed to the vercel.
