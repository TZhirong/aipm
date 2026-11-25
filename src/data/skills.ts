export type SkillIcon = 'ai' | 'product' | 'data'

export interface SkillGroup {
  id: string
  icon: SkillIcon
  title: string
  subtitle: string
  skills: string[]
  tools: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'ai',
    icon: 'ai',
    title: 'AI 能力',
    subtitle: '理解模型边界，把能力翻译成产品方案',
    skills: [
      'LLM 基础理解',
      'Prompt Engineering',
      'RAG',
      '微调',
      '模型评估',
      'Agent 设计',
      'AI 安全风险识别'
    ],
    tools: ['LangChain', 'Chroma', 'Claude Code', 'ChatGPT']
  },
  {
    id: 'product',
    icon: 'product',
    title: '产品能力',
    subtitle: '从真实痛点出发，定义可交付的范围',
    skills: ['用户洞察', '需求分析', '竞品分析', '产品规划', 'MVP 定义', 'PRD 撰写', '原型设计'],
    tools: ['Figma', 'Axure', 'Xmind']
  },
  {
    id: 'data',
    icon: 'data',
    title: '数据能力',
    subtitle: '用指标验证效果，而不是凭感觉判断',
    skills: ['数据查询', '数据清洗', '数据分析', '数据可视化', '产品指标', '模型评估指标', '数据埋点'],
    tools: ['Python', 'SQL', 'Excel']
  }
]
