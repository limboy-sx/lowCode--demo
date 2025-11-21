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

//1.基础模块定义，后续会有外部模块
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
// 因为我们后面会考虑插件市场，所以我们需要一个类来管理所有的 block
// 只有你安装了对应的外部插件，你才能在页面中使用

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

console.log(
  '🚀 ~ file: BlockRenderer.vue:55 ~ blockSuite.hasBlock(button):',
  blockSuite.hasBlock('button')
)
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
console.log(
  '🚀 ~ file: BlockRenderer.vue:68 ~ blockSuite.hasBlock(button):',
  blockSuite.hasBlock('button')
)
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

// Extensions of Vue types to be appended manually
// https://github.com/microsoft/rushstack/issues/2090
// https://github.com/microsoft/rushstack/issues/1709

// TODO: figure out why it cannot be 'vue'
// @ts-ignore: works on Vue 3, fails in Vue 2
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    /**
     * Access to the application's blocksMap
     */
    $blocksMap: string
  }
}
