

const isStudentdatEmpty = (req, res, next) => {
    if (req.session && req.session.userId) {
        next();
    } else {
        const alertScript = `
            <script>
                alert('Please Carefully Fillup The Data.');
                window.location.href = '/marks-entry';
            </script>`
        res.send(alertScript);
        res.redirect('/marks-entry');
    }
};
module.exports=isStudentdatEmpty;







