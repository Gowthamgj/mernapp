let path = "http://localhost:8000/api";
(function (w){
    w.urls = {
        validateuser : path+ '/validate'
    }
    w.formatBody = (obj) => {
        return {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
    }
})(window);