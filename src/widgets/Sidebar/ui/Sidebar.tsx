import {classNames} from "helpers/classNames/classNames";
import cls from './Sidebar.module.scss'
import {useState} from "react";
interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle =()=>{
        setCollapsed(prevState => !prevState)
    }

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
        </div>
    );
};