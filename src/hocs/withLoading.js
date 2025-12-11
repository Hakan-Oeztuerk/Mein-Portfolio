import { useState } from "react";

export default function withLoading(Component) {
  return function WrappedComponent(props) {
    const [loading, setLoading] = useState(false);

    const triggerLoading = async (action) => {
      setLoading(true);
      await action();
      setLoading(false);
    };

    return (
      <Component
        {...props}
        loading={loading}
        triggerLoading={triggerLoading}
      />
    );
  };
}
