## 简介
Vue3 低代码可视化项目demo,支持拖拽，插件注册，简单文本code编辑，采用流式布局，本项目封装smooth-dnd实现拖拽功能，结合smooth-dnd的拖拽事件api与pinia实现页面模块的编辑。该demo已经实现基本功能，可以用于架构借鉴和扩展，掌握基于 monorepo 架构设计思想，掌握项目规范约束，横向产出

## 特性
* 物料管理
* 编排
* 渲染
* 插件注册（可扩展至用户端）
* 流程引擎

PC 端布局编排
   <img src="https://private-user-images.githubusercontent.com/54209506/517686417-f04046bc-1efa-4fc3-bec6-6cb312efff8d.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM3OTY4NDEsIm5iZiI6MTc2Mzc5NjU0MSwicGF0aCI6Ii81NDIwOTUwNi81MTc2ODY0MTctZjA0MDQ2YmMtMWVmYS00ZmMzLWJlYzYtNmNiMzEyZWZmZjhkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTIyVDA3MjkwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZiMjI5ODY3ZGQ5Y2M4OTI3ZmM0ZTVjMTMwNTE3NWVmMTdmN2M4YWNkNzBkMmRhMjIyZTFiYWNiODlmMjhhZDMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.3t3p5xVW_GEaRVoo0Ifq9nc3hgK7QgMVDoZ63HQ1Z50" width="950" />

mobile 端布局编排
   <img src="https://private-user-images.githubusercontent.com/54209506/517686234-ce5d1b92-9e6d-4617-95b4-c3924eb6d07d.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM3OTY4ODAsIm5iZiI6MTc2Mzc5NjU4MCwicGF0aCI6Ii81NDIwOTUwNi81MTc2ODYyMzQtY2U1ZDFiOTItOWU2ZC00NjE3LTk1YjQtYzM5MjRlYjZkMDdkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTIyVDA3Mjk0MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRhYWU2ZDBlOGE5MzA4Zjc1Y2JlOGFlZjdiZmM5NDRlZDJkNWVmYTQ1MzNhNTIyMjY1NGIzZWFjODZlNDM2YjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.7oIXUdzfPXbvV1TDT4ugSOjh15AM-BLh-mCLMyz7tLw" width="950" />

可拖拽流式布局
   <img src="https://private-user-images.githubusercontent.com/54209506/517659933-25974197-eff0-4a1e-bcde-473516f9ea00.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM3OTY5MDMsIm5iZiI6MTc2Mzc5NjYwMywicGF0aCI6Ii81NDIwOTUwNi81MTc2NTk5MzMtMjU5NzQxOTctZWZmMC00YTFlLWJjZGUtNDczNTE2ZjllYTAwLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTIyVDA3MzAwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU5YjQ1ZTUyZDc1NDY0MGRlNTIwMTY5MjU5N2YwOGViNjRiMGIyZDU5N2VkN2Y1NGMxNGZmZWQ1MzE5OTk1MDMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.MbN0u54XRNJGkB5dZzZQ0wMrsmMkMkMDY5-DhQIiMvY" width="950" />

##  关键配置

<details>
  <summary>blockRender策略渲染/插件注册</summary>  
  

  ```

//不同情况下渲染不同的组件，简单原理
//blockRender
  <script setup lang="ts">
import { computed } from "vue";

import type { Block } from "@/types/block";

import chartBlock from "./internal/chartBlock.vue";
import fallBackBlock from "./internal/fallBackBlock.vue";
import imageBlock from "./internal/imageBlock.vue";
import textBlock from "./internal/textBlock.vue";

const props = defineProps<{ block: Block }>();
const blockMaterial = computed(() => {
 
  switch (props.block.type) {
    case "chart":
      return chartBlock;
    case "image":
      return imageBlock;
    case "text":
      return textBlock;
    default: //默认
      return fallBackBlock;
  }
});
</script>

<template>
  <div>
    <component :is="blockMaterial" :block="block"></component>
  </div>
</template>

<style scoped></style>

  ```
本项目实现
  ```
//setup.ts全局注册
import type { App } from 'vue'

import ChartBlock from '@/blocks/basic/ChartBlock.vue'
import HeroTitleBlock from '@/blocks/basic/HeroTitleBlock.vue'
import ImageBlock from '@/blocks/basic/ImageBlock.vue'
import QuoteBlock from '@/blocks/basic/QuoteBlock.vue'
import ViewBlock from '@/blocks/basic/ViewBlock.vue'
import ButtonBlock from '@/blocks/external/ButtonBlock.vue'
import FormBlock from '@/blocks/external/FormBlock.vue'
import NotesBlock from '@/blocks/external/NotesBlock.vue'
import type { BlockType } from '@/types/block'

const baseBlocks = [
  {
    type: 'quote',
    material: QuoteBlock
  },
  {
    type: 'heroTitle',
    material: HeroTitleBlock
  },
  {
    type: 'view',
    material: ViewBlock
  },
  {
    type: 'chart',
    material: ChartBlock
  },
  {
    type: 'image',
    material: ImageBlock
  }
]

//2.创建了一个“Block 注册中心”
class BlockSuite {
  //浅拷贝一份基础模块
  private blocks = baseBlocks
  constructor() { }
  //生成键值对形式的 blocksMap
  getBlocksMap() {
    return Object.fromEntries(this.blocks.map((block) => [block.type, block]))
  }
  getBlocks() {
    return this.blocks
  }
  addBlock(block: any) {
    this.blocks.push(block)
  }
  hasBlock(type: BlockType) {
    return !!this.getBlocksMap()[type]
  }
}

//new一个 BlockSuite 实例
const blockSuite = new BlockSuite()

//调用 addBlock 方法注册外部模块
blockSuite.addBlock({
  type: 'button',
  material: ButtonBlock
})
blockSuite.addBlock({
  type: 'form',
  material: FormBlock
})
blockSuite.addBlock({
  type: 'notes',
  material: NotesBlock
})

//拿到所有注册的区块组件，键值对形式
const blocksMap = blockSuite.getBlocksMap()
// 3.创建一个 Symbol 用于依赖注入
// 这样就可以在任何地方通过 inject 来获取到 blocksMap
// 也就是所有的区块组件
// 这样就可以做到按需加载区块组件
// 只有当页面中使用了某个区块组件，才会去加载对应的组件代码
// 这对于减小初始包体积是非常有帮助的
// 也就是说，如果你的页面中没有使用 chart 区块组件，那么 chart 组件的代码就不会被加载
//在任意子组件里，你就可以这样拿到：const blocksMap = inject(blocksMapSymbol)
//然后 <component :is="block" /> 渲染出来。
export const blocksMapSymbol = Symbol('blocksMap')

export const setup = (app: App<Element>) => {
  const ins = {
    install(app: App<Element>) {
      // 这两个操作基本上是 Vue3 视图相关插件的标配
      //子组件可以通过inject(blocksMapSymbol),拿到blocksMap,也就是所有的区块组件
      app.provide(blocksMapSymbol, blocksMap)
      // provide 之后，我们就可以在任何地方使用 inject 来获取到这个值
      app.config.globalProperties.$blocksMap = blocksMap
    }
  }

  app.use(ins)
}

// @ts-ignore: works on Vue 3, fails in Vue 2
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $blocksMap: string
  }
}

//BlocksRenderer.vue策略渲染实现，结合物料
  <div class="block-wrapper" ref="blockWrapperRef" @click.stop="selectBlock(block.id)">
    <!-- @vue-ignore -->
    <component :is="$blocksMap[block.type].material" class="block" :blockInfo="block" />
    <div

  ```

</details>

<details>
  <summary>根据smooth-dnd库自定义拖拽组件</summary>  

因为smooth-dnd只有原生⇒所以得自己封装成ts-vue⇒
  ```
  
//SmoothDndContainer.ts

import { defineComponent } from "vue";
import { smoothDnD, dropHandlers, type SmoothDnD } from "smooth-dnd";
import { validateTagProp } from "./utils";

//bug处理。。。。。
smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler;
smoothDnD.wrapChild = false;

//封装smooth-dnd 的 Vue 组件容器
type Evenkey =
  | "drag-start"
  | "drag-end"
  | "drop"
  | "drag-enter"
  | "drag-leave"
  | "drop-ready";
//抹平api差异，js方法=>vue
const evenEmitterMap: Record<Evenkey, string> = {
  "drag-start": "onDragStart",
  "drag-end": "onDragEnd",
  drop: "onDrop",
  "drag-enter": "onDragEnter",
  "drag-leave": "onDragLeave",
  "drop-ready": "onDropReady",
};
export const SmoothDndContainer = defineComponent({
  name: "SmoothDndContainer",
  setup() {
    // const container = ref(null);
    return {
      container: null as SmoothDnD | null,
    };
  },
  mounted() {
    //初始化smooDnd容器
    //将组件和Dom关联
    //初始化props参数，在 Vue 组件的实例（this）里，$props 是一个只读对象
    const options: any = Object.assign({}, this.$props);//拿到prop数据做成对象
    //触发事件
    for (const key in evenEmitterMap) {
      //拿到事件
      const evenKey = key as Evenkey;
      options[evenEmitterMap[evenKey]] = (props: any) => {
        this.$emit(evenKey, props);
      };
    }
  },
  unmounted() {
    if (this.container) {
      this.container.dispose();
    }
  },
  emits: [
    "drag-start",
    "drag-end",
    "drop",
    "drag-enter",
    "drag-leave",
    "drop-ready",
  ],
  //组件接收外部的“定制化参数”。
  props: {
    orientation: {
      type: String,
      default: "vertical",
    },
    removeOnDropOut: {
      type: Boolean,
      default: false,
    },
    autoScrollEnabled: {
      type: Boolean,
      default: true,
    },
    animationDuration: {
      type: Number,
      default: 250,
    },
    behaviour: String,
    groupName: String,
    dragHandleSelector: String,
    nonDragAreaSelector: String,
    lockAxis: String,
    dragClass: String,
    dropClass: String,
    dragBeginDelay: Number,
    getChildPayload: Function,
    shouldAnimateDrop: Function,
    shouldAcceptDrop: Function,
    getGhostParent: Function,
    dropPlaceholder: [Object, Boolean],
    tag: {
      validator: validateTagProp,
      default: "div",
    },
  },
   render() {
    const tagProps = getTagProps(this);
    return h(
      tagProps.value,
      Object.assign({}, { ref: "container" }, tagProps.props),
      this.$slots.default?.()
    );
  },
});


//SmoothDndDraggable.ts
import { defineComponent, h } from "vue";
import { getTagProps, validateTagProp } from "./utils";
import { constants } from "smooth-dnd";

//封装组件
export const SmoothDndDraggable = defineComponent({
  name: "SmoothDndDraggable",
  props: {
    tag: {
      validator: validateTagProp,
      default: "div", //默认值
    },
  },
  render() {
    const tagProps = getTagProps(this, constants.wrapperClass);
    //this当前组件实例,包含props/slot等等||
    // smooth-dnd 库内部定义的一个固定 CSS 类名export const wrapperClass = 'smooth-dnd-container';

    return h(
      tagProps.value, //'ConmponensName'
      Object.assign({}, tagProps.props), //{ props: class:['xx','yy']}
      this.$slots.default?.() //?idk,i just got here
    );
    //例h("div", { class: "foo" }, "Hello")
  },
});
  ```
  
  
</details>

<details>
  <summary>针对拖拽组件的类型保护</summary>  

  ```

//@/types/block
export type BaseBlock = {
  id: string;
  type: string;
};

export type TextBlock = BaseBlock & {
  type: "text";
  props: {
    content: string;
  };
  actions: {
    onCopy: () => void;
    onEdit: () => void;
  };
};

export type ChartBlock = BaseBlock & {
  type: "chart";
  props: {};
  actions: {
    onFilter: () => void;
    onSwitch: () => void;
  };
};

export type ImageBlock = BaseBlock & {
  type: "image";
  props: {
    src: string;
  };
  actions: {
    onEdit: () => void;
  };
};

export type Block = TextBlock | ChartBlock | ImageBlock;
  ```

</details>

##  技术栈

  *  包管理：pnpm
  *  lint规范：
commitlint；
stylelint；
prettier；
eslint；
editorconfig;
  *  Vue CLI、Vue3  
  * Pinia  
  * Vue-Router  
  * 拖拽库：基于原生的 smooth-dnd 需要自己封装用于 Vue3 的拖拽组件  
  * 编辑器：tiptap for vue3，https://tiptap.dev/installation/vue3  
  * UI 库：Arco Design，https://arco.design/vue/docs/start  
  * 表单校验：vee-validate，https://vee-validate.logaretm.com/v4/  
  * 流程编排：@vue-flow/core，https://vueflow.dev/  
  * 图表：echarts  
