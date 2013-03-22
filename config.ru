require "rack/contrib/try_static"
require "rack/contrib/not_found"

use Rack::TryStatic,
  :root => "build",
  :urls => %w[/],
  :try  => [".html", "index.html", "/index.html"]

run Rack::NotFound.new("build/errors/404.html")