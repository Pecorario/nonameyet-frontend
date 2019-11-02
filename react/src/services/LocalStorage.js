const getList = () => {
    if (localStorage.getItem('task_list')) {
        return JSON.parse(localStorage.getItem('task_list'))
    } else {
        return []
    }
}

const saveList = (list) => {
    localStorage.setItem('task_list', JSON.stringify(list))
}

const save = (task) => {
    if (!localStorage.getItem('task_list')) {
        let task_list = []
        task_list = [...task_list, task]
        saveList(task_list)
    } else {
        let task_list = JSON.parse(localStorage.getItem('task_list'))
        task_list = [...task_list, task]
        saveList(task_list)
    }
}

const change = (id) => {
    let task_list = getList()
    const updateLista = task_list.map(task => {
        if (task.id === id) 
            task.status = task.status + 1
        return task
    })
    saveList(updateLista)
}

const load = () => {
    return getList()
}

const remove = (id) => {
    let task_list = getList()
    if (task_list) {
        let novaLista = task_list.filter(task => {
            return task.id !== id
        })
        saveList(novaLista)
    }

}

const clear = () => {
    localStorage.removeItem('task_list')
}

const LocalStorage = {
    save,
    load,
    change,
    remove,
    clear
}

export default LocalStorage 