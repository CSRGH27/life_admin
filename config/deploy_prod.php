<?php



use EasyCorp\Bundle\EasyDeployBundle\Deployer\DefaultDeployer;

return new class extends DefaultDeployer
{
    public function configure()
    {
        return $this->getConfigBuilder()
            ->server('debian@51.178.50.201')
            ->deployDir('/var/www/life_admin')
            ->repositoryUrl('git@github.com:CSRGH27/life_admin.git')
            ->repositoryBranch('develop')
            ->symfonyEnvironment('prod');
    }
};
