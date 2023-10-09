import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="text-center h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
};

export default PrivateRoutes;