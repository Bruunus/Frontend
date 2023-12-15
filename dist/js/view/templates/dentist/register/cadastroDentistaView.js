import { CadastroController } from "../../../../controller/cadastroController.js";
export class CadastroDentistaView {
    constructor(renderizadorId) {
        this.dentistaAPI = new CadastroController();
        this.elementDOM = document.querySelector(renderizadorId);
    }
    templateCadastroDentista() {
        return `           

            <div class="div_titulo_dentist div_titulo_dentist_register">
                <h4 class="no-select">Cadastro Dentista</h4>
            </div>


            <div id="container-register-dentist">

                <form id="form_cadastro_dentista" class="row"> 
                    <!-- col 1 -->

                    <div class="form-group col-md-6 col-sm-12">                        
                        <label for="nomeCompleto" class="label-form">Nome completo</label>
                        <input type="text" name="nomeCompleto" id="nomeCompleto" class="form-control form-input" maxlength="20">                        
                    </div>

                    <div class="form-group col-md-6 col-sm-12"> 
                        <label for="dataNascimento" class="label-form">Data de nascimento</label>
                        <input type="date" name="dataNascimento" id="dataNascimento" class="form-control form-input">
                    </div>
                    
                    <div class="form-group col-md-4 col-sm-12"> 
                        <label for="cpf" class="label-form">CPF</label>
                        <input type="text" autocomplete="off" name="cpf" id="cpf" class="form-control form-input cpfInputFormDentist" maxlength="14">
                    </div>
                    
                    <div class="form-group col-md-4 col-sm-12">
                        <label for="cro" class="label-form">CRO</label>
                        <input type="number" name="cro" id="cro" class="form-control form-input" maxlength="4">
                    </div>

                    <div class="form-group col-md-4 col-sm-12"> 
                        <label for="especialidade" class="label-form">Especialidade</label>
                        <select id="especialidade" class="form-control select-form">
                            <option value="" disabled selected>Selecione</option>
                            <option value="Cirurgia">Cirurgia</option>
                            <option value="Cirurgia Bucomaxilofacial">Cirurgia Bucomaxilofacial</option>
                            <option value="Dentística">Dentística</option>
                            <option value="Endodontia">Endodontia</option>
                            <option value="Odontopediatria">Odontopediatria</option>
                            <option value="Prótese Dentária">Prótese Dentária</option>
                            <option value="Periodontia">Periodontia</option>
                            <option value="Odontogeriatria">Odontogeriatria</option>
                            <option value="Estética">Estética</option>
                        </select>
                    </div>

                    <div class="form-group col-md-4 col-sm-12"> 
                        <label for="telefoneResidencial" class="label-form">Telefine Residencial</label>
                        <input type="text" name="telefoneResidencial" id="telefoneResidencial" class="form-control form-input" maxlength="14">
                    </div>

                    <div class="form-group col-md-4 col-sm-12"> 
                        <label for="telefoneCelular" class="label-form">Telefone Celular</label>
                        <input type="text" name="telefoneCelular" id="telefoneCelular" class="form-control form-input" maxlength="16">
                    </div>

                    <div class="form-group col-md-4 col-sm-12"> 
                        <label for="email" class="label-form">E-mail</label>
                        <input type="text" name="email" id="email" maxlength="35" class="form-control form-input" maxlength="31">
                    </div>

                    <div class="form-group col-md-6 col-sm-12"> 
                        <label for="rua" class="label-form">Rua</label>
                        <input type="text" name="rua" id="rua" maxlength="32" class="form-control form-input" maxlength="25">
                    </div>

                    <div class="form-group col-md-6 col-sm-12"> 
                        <label for="numero" class="label-form">Número</label>
                        <input type="number" name="numero" id="numero" maxlength="5" class="form-control form-input" >
                    </div>

                    <div class="form-group col-md-4 col-sm-12"> 
                        <label for="bairro" class="label-form">Bairro</label>
                        <input type="text" name="bairro" id="bairro" maxlength="20" class="form-control form-input">
                    </div class="form-group col-md-4">

                    <div class="form-group col-md-4 col-sm-12"> 
                        <label for="cidade" class="label-form">Cidade</label>
                        <input type="text" name="cidade" id="cidade" maxlength="24" class="form-control form-input">
                    </div>

                    <div class="form-group col-md-4 col-sm-12"> 
                        <label for="estado" class="label-form">Estado</label>
                        <input type="text" name="estado" maxlength="2" id="estado" class="form-control form-input">
                    </div>

                    <div class="form-group col-12">
                        <div>
                            <button type="submit" class="btn btn-secondary">Salvar</button>
                        </div>
                    </div>

                </form>     
            </div>

        `;
    }
    eventSubmit() {
        const formSubmit = document.querySelector('#form_cadastro_dentista');
        if (!formSubmit) {
            console.error("Problema encontrado ao renderizar formulário.");
            return;
        }
        else {
            formSubmit.addEventListener('submit', (event) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                event.preventDefault();
                const nomeCompleto = ((_a = formSubmit.querySelector('#nomeCompleto')) === null || _a === void 0 ? void 0 : _a.value) || '';
                const dataNascimento = ((_b = formSubmit.querySelector('#dataNascimento')) === null || _b === void 0 ? void 0 : _b.value) || '';
                const cpf = ((_c = formSubmit.querySelector('#cpf')) === null || _c === void 0 ? void 0 : _c.value) || '';
                const cro = ((_d = formSubmit.querySelector('#cro')) === null || _d === void 0 ? void 0 : _d.value) || '';
                const especialidadeSelect = document.querySelector('#especialidade');
                const especialidade = especialidadeSelect === null || especialidadeSelect === void 0 ? void 0 : especialidadeSelect.value;
                const telefoneResidencial = ((_e = formSubmit.querySelector('#telefoneResidencial')) === null || _e === void 0 ? void 0 : _e.value) || '';
                const telefoneCelular = ((_f = formSubmit.querySelector('#telefoneCelular')) === null || _f === void 0 ? void 0 : _f.value) || '';
                const email = ((_g = formSubmit.querySelector('#email')) === null || _g === void 0 ? void 0 : _g.value) || '';
                const rua = ((_h = formSubmit.querySelector('#rua')) === null || _h === void 0 ? void 0 : _h.value) || '';
                const numero = (_j = formSubmit.querySelector('#numero')) === null || _j === void 0 ? void 0 : _j.value;
                const bairro = ((_k = formSubmit.querySelector('#bairro')) === null || _k === void 0 ? void 0 : _k.value) || '';
                const cidade = ((_l = formSubmit.querySelector('#cidade')) === null || _l === void 0 ? void 0 : _l.value) || '';
                const estado = ((_m = formSubmit.querySelector('#estado')) === null || _m === void 0 ? void 0 : _m.value) || '';
                try {
                    console.log('Nome completo: ' + nomeCompleto +
                        '\nData nascimento: ' + dataNascimento +
                        '\nCPF: ' + cpf +
                        '\nCRO: ' + cro +
                        '\nEspecialidade: ' + especialidade +
                        '\nTelefone Res: ' + telefoneResidencial +
                        '\nTelefone Cel: ' + telefoneCelular +
                        '\nE-mail: ' + email +
                        '\nRua: ' + rua +
                        '\nNúmero: ' + numero + '  (' + typeof numero + ')' +
                        '\nBairro: ' + bairro +
                        '\nCidade: ' + cidade +
                        '\nEstado: ' + estado);
                    this.validation();
                    this.dentistaAPI.cadastrarDentista(nomeCompleto, dataNascimento, cpf, cro, especialidade, telefoneResidencial, telefoneCelular, email, rua, numero, bairro, cidade, estado);
                }
                catch (error) {
                    console.log('Erro ao envidar JSON: ' + error.message);
                }
                this.limpaCampos();
                alert('Registro realizado com sucesso!');
            });
        }
    }
    limpaCampos() {
        const nomeCompleto = document.querySelector('#nomeCompleto');
        const dataNascimento = document.querySelector('#dataNascimento');
        const cpf = document.querySelector('#cpf');
        const cro = document.querySelector('#cro');
        const especialidade = document.querySelector('#especialidade');
        const telefoneResidencial = document.querySelector('#telefoneResidencial');
        const telefoneCelular = document.querySelector('#telefoneCelular');
        const email = document.querySelector('#email');
        const rua = document.querySelector('#rua');
        const numero = document.querySelector('#numero');
        const bairro = document.querySelector('#bairro');
        const cidade = document.querySelector('#cidade');
        const estado = document.querySelector('#estado');
        nomeCompleto.value = '';
        dataNascimento.value = '';
        cpf.value = '';
        cro.value = '';
        especialidade.value = '';
        telefoneResidencial.value = '';
        telefoneCelular.value = '';
        email.value = '';
        rua.value = '';
        numero.value = '';
        bairro.value = '';
        cidade.value = '';
        estado.value = '';
    }
    mask() {
        const cpfvalidation = document.querySelector('#cpf');
        const telefoneResidencialValidation = document.querySelector('#telefoneResidencial');
        const telefonecelularValidation = document.querySelector('#telefoneCelular');
        cpfvalidation.addEventListener('keypress', (event) => {
            const key = event.key;
            const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '-'];
            if (!validKeys.includes(key)) {
                event.preventDefault();
            }
            else {
                let inputCpfMask = cpfvalidation.value.length;
                if (inputCpfMask === 3 || inputCpfMask === 7) {
                    cpfvalidation.value += '.';
                }
                else if (inputCpfMask === 11) {
                    cpfvalidation.value += '-';
                }
            }
        });
        telefoneResidencialValidation.addEventListener('keypress', () => {
            let telResMask = telefoneResidencialValidation.value.length;
            if (telResMask === 0) {
                telefoneResidencialValidation.value += '(';
            }
            else if (telResMask === 3) {
                telefoneResidencialValidation.value += ') ';
            }
            else if (telResMask === 9) {
                telefoneResidencialValidation.value += '-';
            }
        });
        telefonecelularValidation.addEventListener('keypress', () => {
            let telCelMask = telefonecelularValidation.value.length;
            switch (telCelMask) {
                case 0:
                    telefonecelularValidation.value += '(';
                    break;
                case 3:
                    telefonecelularValidation.value += ') ';
                    break;
                case 4:
                    telefonecelularValidation.value += ' ';
                    break;
                case 6:
                    telefonecelularValidation.value += ' ';
                    break;
                case 11: telefonecelularValidation.value += '-';
            }
        });
    }
    validation() {
    }
    formProcess(event) {
        event.preventDefault();
    }
    render() {
        this.elementDOM.innerHTML = this.templateCadastroDentista();
        this.mask();
        this.eventSubmit();
        const formSubmit = document.querySelector('#form_cadastro_dentista');
        if (!formSubmit) {
            formSubmit.addEventListener('submit', this.formProcess.bind(this));
        }
    }
}
