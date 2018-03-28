$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "wickeditor/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "wickeditor"
  s.version     = Wickeditor::VERSION
  s.authors     = ["Luke Hottinger"]
  s.email       = ["me@lukehottinger.com"]
  s.homepage    = "http://wickeditor.com/"
  s.summary     = "A Rails Gem for Wick's Editor."
  s.description = "A Description to come..."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  s.add_dependency "rails", "~> 5.1.5"

  s.add_development_dependency "sqlite3"
end
