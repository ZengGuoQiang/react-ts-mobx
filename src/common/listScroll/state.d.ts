interface ListMessage{
    id:number,
    message:string,
    img?:string
}

interface Data{
    list:Array<ListMessage>,
    img?:boolean
}

interface MenuState{

}

export { Data, ListMessage, MenuState}