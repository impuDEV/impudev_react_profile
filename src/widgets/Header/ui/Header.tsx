import {classNames} from "shared/lib/classNames/classNames";
import cls from './Header.module.scss'
import {useState} from "react";
import { Button } from "shared/ui/Button/Button";

interface HeaderProps {
    className?: string
}

export const Header = ({className}: HeaderProps) => {
    const [hidden, setHidden] = useState(false)

    const onToggle = () => {
        setHidden(prev => !prev)
    }


    return (
        <div className={classNames(cls.Header, {[cls.hidden]: hidden}, [className])}>
            header test
            <Button
                onClick={onToggle}
            >
                toggle
            </Button>
        </div>
    )
}