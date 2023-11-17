import React, { createContext,  useContext,  useState } from 'react';

interface DrawerContextData {
  open:boolean
  toggleDrawer:() => void
}

export const DrawerContext = createContext<DrawerContextData>(
  {} as DrawerContextData,
);

export const DrawerProvider: React.FC = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = useState<boolean>(false);

  async function toggleDrawer() {
    setOpen(!open)
  }
  
  return (
    <DrawerContext.Provider
      value={{
        open,
        toggleDrawer
      }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
    const {
      open,
      toggleDrawer
    } = useContext(DrawerContext);
  
    return {
      open,
      actions: {
        toggleDrawer,
      }
    }
};