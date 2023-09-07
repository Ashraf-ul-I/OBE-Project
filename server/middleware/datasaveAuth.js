
const isStudentNotEmpty = (req, res, next) => {
    if (req.session && req.session.userId) {
        next();
    } else {
        const alertScript = `
        <script>
            alert('Data Save Succesfully!!.');
            window.location.href = '/marks-entry'; 
        </script>`
       
        res.send(alertScript);
        res.redirect('/'); 
    }
};
module.exports=isStudentNotEmpty;