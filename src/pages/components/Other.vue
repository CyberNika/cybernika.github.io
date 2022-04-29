<script setup lang="ts">
// const links = [
//   { title: '博客', link: '/blog' },
//   { title: '作品', link: '/gallery' },
//   { title: '摄影', link: '/gallery11' },
//   { title: '源码', link: 'https://github.com/snokier/site' },
//   { title: '关于', link: '/about' },
// ]
</script>

<template>
  <div id="say-hi" class="home-section">
    <h3 class="home-section-title" font-serif text-center>
      <p>想了解更多</p>
      <p>或许可以在这里找到</p>
    </h3>

    <!-- <div class="other-show-content serif">
      <div style="{{" flex: 2 }} class="other-show-col">
        <h3 class="other-show-col-title">
          关于
        </h3>

        <div />
      </div>

      <div style="{{" flex: 3, flexShrink: 0 }} class="other-show-col">
        <h3 class="other-show-col-title">
          链接
        </h3>

        <div class="other-show-col-main">
          <ul>
            {LINKS.map((item) => (
            <li key="{item.link}">
              <p>
                <a title="{item.title}" href="{item.link}" target="__blank">
                  {item.title}
                </a>
              </p>
            </li>
            ))}
          </ul>
        </div>
      </div>

      <div style="{{" flex: 4, flexShrink: 0 }} class="other-show-col">
        <h3 class="other-show-col-title">
          二维码
        </h3>

        <div class="other-show-col-main">
          <img src="qrcode" alt="二维码">
        </div>
      </div>
    </div> -->
  </div>
</template>
