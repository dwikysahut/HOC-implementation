import React, { ComponentType, useEffect, useState } from 'react';

// Higher-Order Component withLoading
const withLoading = <P extends object>(
  WrappedComponent: ComponentType<P & { isLoading: boolean }>
) => {
  const WithLoadingComponent = (props: Omit<P, 'isLoading'>) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    return <WrappedComponent {...(props as P)} isLoading={isLoading} />;
  };

  return WithLoadingComponent;
};

export default withLoading;
