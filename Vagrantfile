Vagrant::Config.run do |config|
  config.vm.box = "lucid64"

  config.vm.network "33.33.33.10"

  config.vm.share_folder "v-data", "/home/vagrant/mounted/phantomjs", "."

  user = ENV['OPSCODE_USER'] || ENV['USER'] 
  
  config.vm.provision :chef_client do |chef|
    # Set up some organization specific values based on environment variable above.
    chef.chef_server_url = "https://api.opscode.com/organizations/#{ENV['CHEF_ORGNAME']}"
    chef.validation_key_path = "#{ENV['HOME']}/.chef/#{ENV['CHEF_ORGNAME']}-validator.pem"
    chef.validation_client_name = "#{ENV['CHEF_ORGNAME']}-validator"

    # Change the node/client name for the Chef Server
    chef.node_name = "#{user}-vagrant"

    # Put the client.rb in /etc/chef so chef-client can be run w/o specifying
    chef.provisioning_path = "/etc/chef"
          
    # tooling, you don't really need this but since I can ;)
    chef.add_recipe("ack-grep") 
          
      
    # logging
    chef.log_level = :info
          
    # phantomjs stuff
    chef.add_recipe("libqt4")
    chef.add_recipe("libqt4::webkit")
    chef.add_recipe("xvfb")
          
    chef.add_recipe("phantomjs")  # Enable provisioning with Puppet stand alone.  Puppet manifests
  end
end
