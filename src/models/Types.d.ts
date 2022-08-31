interface IColumn {
    name: string
    label: string
    field: string | (() => any)
    align?: 'left' | 'right' | 'center'
    sortable?: boolean
    format?: Function
}
export { IColumn }
