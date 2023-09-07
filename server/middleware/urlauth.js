

const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.userId) {
        // User is authenticated, allow access to the route
        next();
    } else {
        const alertScript = `
            <script>
                alert('You must log in to access this page.');
                window.location.href = '/'; // Redirect to the login page
            </script>`
        /**
         * // User is not authenticated, but check if a session exists before redirecting
         */
        if (req.session) {
            res.send(alertScript);
        } else {
            // Session doesn't exist,if its  a first-time visit
            next();
        }
    }
};

module.exports = isAuthenticated;
