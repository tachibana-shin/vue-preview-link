# vue-preview-link

Support vue-routee and ssr.

## Install

``` bash
yarn install vue-preview-link
```

## Usage

``` js
import Vue from "vue"
import PreviewLink from "vue-preview-link"

Vue.use(PreviewLink)
```
``` vue
<template>
  <div id="#app">
    <vue-preview-link to="https://google.com" name="Google" url-name="google.com" image="https://google.com/favicon.ico"/>
  </div>
</template>
```
