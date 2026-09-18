import { Icon } from "@iconify/react";

type ButtonProps = {
    title: string;
    disabled?: boolean;
    className?: string;
    icon?: string;
    onClick?: () => void; 
};

export const Button = ({ title, disabled, className, icon, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick} 
            disabled={disabled}
            className={`whitespace-nowrap  rounded-full w-full text-center h-fit cursor-pointer bg-primary text-white transition-transform duration-200 ${disabled ? 'opacity-50 cursor-not-allowed' : ' hover:text-white hover:-translate-y-1'} flex justify-center items-center gap-2 ${className} p-4`}
        >
            {icon && <Icon icon={icon} width={20} className="cursor-pointer" />}
            <p className="!font-semibold !tracking-wider sm:block ">{title}</p>
        </button>
    );
};