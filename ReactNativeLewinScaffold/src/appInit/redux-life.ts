export const beforeRunApp = () => {
    console.log('redux 数据之前')
}

export const afterRehydrated = () => {
    console.log('redux 数据还原')
}