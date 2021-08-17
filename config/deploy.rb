# config valid for current version and patch releases of Capistrano
lock '~> 3.16.0'

set :application, 'hair_cut'
set :repo_url, 'git@github.com:sacachi/hair-cut.git'

set :deploy_to, "/home/deploy/apps/#{fetch :application}"

append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', '.bundle', 'public/system',
       'public/uploads'

# Only keep the last 5 releases to save disk space
set :keep_releases, 5
