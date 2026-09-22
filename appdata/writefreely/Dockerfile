FROM debian:bookworm-slim
ARG WF_VERSION=0.15.1

RUN apt-get update \
 && apt-get install -y --no-install-recommends ca-certificates wget \
 && rm -rf /var/lib/apt/lists/* \
 && wget -qO- https://github.com/writefreely/writefreely/releases/download/v${WF_VERSION}/writefreely_${WF_VERSION}_linux_amd64.tar.gz | tar xz -C /opt \
 && useradd -r -u 1000 wf \
 && mkdir -p /opt/writefreely/keys /opt/writefreely/data \
 && chown -R wf /opt/writefreely

WORKDIR /opt/writefreely
USER wf
CMD ["./writefreely"]