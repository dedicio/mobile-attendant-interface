import { ComponentOptions, DefineComponent, defineComponent } from 'vue'

export function open(component: ComponentOptions) {
    return function (props: object = {}, events: object) {

        const Component = defineComponent(component)
        const modalInstance: DefineComponent = new Component({
            propsData: {
                ...props,
            },
        })
        modalInstance.$mount()
        document.body.appendChild(modalInstance.$el)

        if (events) {
            Object.entries(events).forEach(([event, callback]) => {
                modalInstance.$on(event, callback)
            })
        }

        const modalWrapper = modalInstance.$refs.modal.$el
        if (modalWrapper) {
            modalWrapper.$on('close', () => {
                destroyComponent(modalInstance, events)
            })

            return modalInstance
        }
        
        return destroyComponent(modalInstance, events)
    }
}

function addEventListeners(componentInstance: any, events: object) {
    if (events) {
        Object.entries(events).forEach(([event, callback]) => {
            componentInstance.$on(event, callback)
        })
    }
}

function removeEventListeners(componentInstance: any, events: object) {
    if (events) {
        Object.entries(events).forEach(([event, callback]) => {
            componentInstance.$off(event, callback)
        })
    }
}

function destroyComponent(componentInstance: any, events: object) {
    if (events) {
        removeEventListeners(componentInstance, events)
    }

    componentInstance.$destroy()
    componentInstance.$el.parentNode.removeChild(componentInstance.$el)
}
