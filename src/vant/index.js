import { Button, Tabbar, TabbarItem,Toast, DropdownMenu, DropdownItem, Cell, CellGroup } from 'vant'
const pluginsVant = [
    Button,
    Tabbar,
    TabbarItem,
    Toast,
    DropdownMenu,
    DropdownItem,
    Cell,
    CellGroup
]

export const vantPlugins = {
    install: function (vm) {
        pluginsVant.forEach(item => {
            vm.component(item.name, item);
        });
    }
};