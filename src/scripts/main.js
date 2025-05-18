$(document).ready(function() {

    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    })

    $('form').validate({
        rules: {
            nome: {
                required : true
            },

            email: {
                required : true,
                email:true
            },

            tel: {
                required : true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome!',
            email: 'Por favor, insira o seu E-mail!',
            tel: 'Por favor, insira o seu número de telefone!'
        }
    })
})