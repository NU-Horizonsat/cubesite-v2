FROM mcr.microsoft.com/devcontainers/typescript-node:1-16-bullseye
COPY --from=jb-devcontainer-features-2338fdf157204cb8eed1f3cc411a51da /tmp/jb-devcontainer-features /tmp/jb-devcontainer-features/
ENV PATH="/usr/local/share/nvm/current/bin:/usr/local/share/npm-global/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
ENV NODE_VERSION="16.20.2"
ENV YARN_VERSION="1.22.19"
ENV NVM_DIR="/usr/local/share/nvm"
ENV NVM_SYMLINK_CURRENT="true"

RUN chmod -R 0755 /tmp/jb-devcontainer-features/ghcr.io-devcontainers-contrib-features-neofetch-1 \
&& cd /tmp/jb-devcontainer-features/ghcr.io-devcontainers-contrib-features-neofetch-1 \
&& chmod +x ./devcontainer-feature-setup.sh \
&& ./devcontainer-feature-setup.sh