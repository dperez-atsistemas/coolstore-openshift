Ansible Role: Commons Facts on OpenShift
[![Build Status](https://travis-ci.org/siamaksade/ansible-openshift-common-facts.svg?branch=master)](https://travis-ci.org/siamaksade/ansible-openshift-common-facts)
=========

Ansible Role for setting commons facts such as apps hostname and OpenShift CLI options.

This role sets the following facts to be used by other roles:

* `apps_hostname_suffix`: apps route hostname suffix

  An example of using this fact would be `app-project.{{ apps_hostname_suffix }}`

* `openshift_master`: openshift master

  If `oc` is already authenticated to OpenShift master, the same master url would be set as this fact

* `openshift_cli`: `oc` command appened with authentication and server options 

  Example: `oc --server=https://master:8443 --insecure-skip-tls-verify=true --token="lg4a*******"`


Role Variables
------------

| Variable             | Default Value | Description   |
|----------------------|---------------|---------------|
|`set_hostname_suffix` | true          | If true, the default apps hostname is set as the `apps_hostname_suffix` fact |
|`oc_kube_config`      | -             | Path to .kube/config to be used for authentication to OpenShift master |
|`oc_token`            | -             | OpenShift CLI token to be used for authentication to OpenShift master |
|`openshift_master`    | -             | OpenShift master |


OpenShift Version Compatibility
------------
When listing this role in `requirements.yml`, make sure to pin the version of the role via one of the tags:

```
- src: siamaksade.openshift_common_facts
  version: 1.1.0
```  

The following tables shows the version combinations that are tested and verified:

| Role Version      | OpenShift Version |
|-------------------|-------------------|
| 1.0.x   | 3.7.x   |
| 1.1.x   | 3.9.x, 3.10.x, 3.11.x |

Note that if a version combination is not listed above, it does **NOT** mean that it won't work on that 
version. The above table is merely the combinations that we have verified and tested.


Example Playbook
------------

```
name: Example Playbook
hosts: localhost
tasks:
- import_role:
    name: siamaksade.openshift_common_facts
  vars:
    set_hostname_suffix: false
    oc_token: "lg4a*******"
    openshift_master: "http://master:8443"
```