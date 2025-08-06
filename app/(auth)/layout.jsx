import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(45deg, transparent 40%, rgb(148 163 184) 40%, rgb(148 163 184) 60%, transparent 60%)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Page Content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default AuthLayout;
