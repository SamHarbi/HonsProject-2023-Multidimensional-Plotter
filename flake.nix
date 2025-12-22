{
  description = "A Nix-flake-based Node.js development environment";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-24.11";
  };

  outputs = { self , nixpkgs ,... }: let
    # system should match the system you are running on
    system = "x86_64-linux";
  in {
    devShells."${system}".default = let
      pkgs = import nixpkgs {
        inherit system;
      };
    NPM_CONFIG_PREFIX = "npm-global";
    in pkgs.mkShell {
      # create an environment with nodejs_18, pnpm, and yarn
      packages = with pkgs; [
        nodejs_23
        nodePackages.pnpm
        angular-language-server
        (yarn.override { nodejs = nodejs_18; })
      ];

      shellHook = ''
        mkdir -p ${NPM_CONFIG_PREFIX}
        npm set prefix ${NPM_CONFIG_PREFIX}
        export PATH="${NPM_CONFIG_PREFIX}/bin:$PATH"
      '';
    };
  };
}
