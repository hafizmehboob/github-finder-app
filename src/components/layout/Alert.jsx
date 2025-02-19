import { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

export default function Alert() {
    const {alert} = useContext(AlertContext);
    return alert !== null && (
        <p className="flex items-start mb-4 space-x-2">
            {alert.type === 'error' && (
                <img width="50" height="50" src="https://img.icons8.com/ios/50/error--v1.png" alt="error--v1" />
            )}
            <p className="flex-1 text-base font-semibold leading-7 text-white">
                <strong>{alert.msg}</strong>
            </p>
        </p>
    )
}
