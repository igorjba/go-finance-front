import React, { ReactNode, createContext } from "react";
import useAlertsHook from "../hooks/useAlerts";

interface AlertContextProps {
    children: ReactNode;
}

const AlertContext = createContext({});

export function AlertProvider({ children }: AlertContextProps) {
    const alertValues = useAlertsHook();

    return (
        <AlertContext.Provider value={alertValues}>{children}</AlertContext.Provider>
    );
}

export default AlertContext;
