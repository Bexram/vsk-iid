<template>
    <v-card>
        <v-card-title class="text-h5 grey lighten-2">
            Обратная связь
        </v-card-title>

        <v-card-text>
            <div class="subtitle">
                Если Вы не нашли подходящий вариант страхования, оставьте, <span style="color:#0078CB">заявку на индивидуальный расчет</span>:
            </div>
            <div class="section__form">
                <div class="section__form__row-input">
                    <div class="section__form__row-input__field">
                        <label class="label" for="phone">Телефон</label>
                        <input
                                id="phone"
                                ref="phone"
                                v-model="form.phone.text"
                                :class="{ 'input-error': form.phone.error }"
                                class="input"
                                type="text"
                                placeholder="+7 000 000 00 00"
                                @input="form.phone.error = false"/>
                    </div>
                </div>
                <div class="section__form__row-input">
                    <div class="section__form__row-input__field">
                        <label class="label" for="fio">Имя</label>
                        <input
                                id="fio"
                                v-model="form.fio.text"
                                class="input"
                                type="text"
                                placeholder="Иванов Иван Иванович"
                                :class="{ 'input-error': form.fio.error }"
                                @input="form.fio.error = false"
                                @keypress="onlyRusWords"/>
                    </div>
                </div>
                <div class="section__form__row-input__field">
                    <label class="label" for="email">E-mail</label>
                    <input
                            id="email"
                            ref="email"
                            v-model="form.email.text"
                            class="input"
                            type="text"
                            v-on:change="checkMail"
                            :class="{ 'input-error': form.email.error }"
                            placeholder="example@mail.ru"
                            @input="form.email.error = false"/>
                </div>
            </div>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="send"
            >
                Отправить
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import {mapActions} from "vuex";
    import Inputmask from "inputmask";

    export default {
        name: "otherAppform",
        data() {
            return {
                form: {
                    fio: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    phone: {
                        text: '',
                        error: false,
                        require: false,
                    },
                    email: {
                        text: '',
                        error: false,
                        require: false,
                    },
                }
            }
        },
        mounted() {
            const phoneMask = new Inputmask({
                mask: '+79999999999',
                greedy: false,
            })
            phoneMask.mask(this.$refs.phone)


        },

        methods: {
            ...mapActions({
                SEND_MAIL: 'SEND_MAIL',
            }),
            onlyRusWords(event) {
                const regexp = /[а-яё"«»., ]/i
                if (!regexp.test(event.key)) {
                    event.preventDefault()
                }
            },
            checkMail() {
                // eslint-disable-next-line
                // const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
                // if (!event.target.value.match(regEmail) && event.target.value.length !== 0) {
                //     this.error = true
                // } else {
                //     this.error = false
                // }
                // this.$emit('inputError', this.error)
                // this.$emit('changeInputData', event.target.value)

                // eslint-disable-next-line
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email.text)) {
                    this.form.email.error = false
                } else {
                    this.form.email.error = true
                }

            },
            checkErrors() {
                let error = false

                for (const key in this.form) {
                    if (Object.hasOwnProperty.call(this.form, key)) {
                        const element = this.form[key]
                        if (
                            element.require &&
                            (!element.text ||
                                (key === 'phone' && (element.text.length < 11 || element.text.includes('_'))) ||
                                (key === 'email' &&
                                    (!element.text.includes('.') ||
                                        element.text.includes('_') ||
                                        element.text.length < 5)))
                        ) {
                            element.error = true
                            error = true
                        }
                    }
                }
                return error
            },
            async send() {
                if (!this.checkErrors()) {
                    const data = {
                        name: this.form.fio.text,
                        phone: this.form.phone.text,
                        email: this.form.email.text
                    }
                    const res = await this.SEND_MAIL(data)
                    if (res.status === 200) {
                        this.$emit('hide', true)
                        this.form.fio.text = ''
                        this.form.phone.text = ''
                        this.form.email.text = ''
                    } else {
                        alert('Запрос не был обработан.')
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    .subtitle {
        text-align: left;
    }
    .section {

        position: absolute;
        padding: 78px 78px;
        background: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .section__title h3 {
        font-size: 48px;
        line-height: 56px;
        color: black;
    }

    .section__form {
        margin: 2rem 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        gap: 1rem;
        width: 100%;
        max-width: 50rem;

        &__title {
            font-size: 32px;
            font-weight: 600;
        }

        &__subtitle {
            font-size: 22px;
            font-weight: 500;
            line-height: 100%;
        }
    }

    .section__form .input {
        width: 100%;
        padding: 1rem 1.5rem;
        border-radius: 20px;
        border: 2px solid #94c7e9;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-align: left;
        background: white;
        color: #3f4042;
        resize: none;
    }

    .section__form .input::placeholder {
        color: #c5c5c5;
        opacity: 1;
    }

    .section__form .input.input-error {
        border-color: #ff5252;
    }

    .section__form__row-input {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;

        &__field {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }

        & .label {
            margin-left: 1rem;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            color: #636466;
        }
    }

    .section_form__agreement {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: black;
        text-align: left;
    }

    .section_form__agreement__text {
        margin: 0;
    }

    .slider__item-btn {
        margin-top: 1rem;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        position: relative;
        max-width: 280px;
        width: 100%;
        height: 62px;
        background: linear-gradient(272.13deg, #0776c1 6.2%, #0984d8 92.59%);
        border-radius: 31px;
        border: 2px solid #0778c4;

        span {
            text-align: center
        }

        &.loading {
            background: linear-gradient(272.13deg, #0776c1 6.2%, #0984d8 92.59%) !important;
            animation: scale 2s linear 2s infinite;
        }

        @keyframes scale {
            0% {
                opacity: 1;
            }
            50% {
                opacity: 0.6;
            }
            100% {
                opacity: 1;
            }
        }
    }

    .slider__item-btn:active {
        background: linear-gradient(272.13deg, #004b7e 6.2%, #0972ba 92.59%);
        border-radius: 31px;
    }

    .slider__item-btn:disabled {
        background: gray;
        border: none;
    }

    .btn__text {
        display: block;
        width: 100%;
        z-index: 3;
        font-size: 24px;
        color: white;
        font-weight: 500;
    }

    .btn__thin-line {
        position: absolute;
        left: 25%;
        z-index: 2;
    }

    .btn__fat-line {
        position: absolute;
        left: 11%;
        z-index: 2;
    }

    .select {
        height: 100%;
        width: 100%;

        &.input-error {
            ::v-deep .v-input__slot {
                border-color: #ff5252;
            }
        }

        ::v-deep .v-text-field__details {
            display: none;
        }

        ::v-deep .v-input__control {
            height: 100%;
        }

        ::v-deep .v-input__slot {
            margin: 0;
            box-shadow: none !important;
            height: 55px;
            width: 100%;
            border-radius: 20px;
            border: 2px solid #94c7e9;
            font-size: 18px;
            line-height: 21px;
            text-align: left;
            background: white;
            color: #3f4042;
            resize: none;
        }

        ::v-deep .v-select__slot .theme--light.v-label {
            color: #3f4042;
        }

        ::v-deep .v-text-field__slot .theme--light.v-label {
            color: #c5c5c5;
        }
    }

    @media screen and (max-width: 650px) {
        .close {
            top: 0.5%;
            left: 90%;
            width: 1.8rem;
            height: 1.8rem;
            box-sizing: border-box;
        }
        .close__img {
            width: 1.2rem;
            height: 1.2rem;
        }
        .section {
            padding: 2rem 1rem;
        }
        .section__form__row-input {
            flex-direction: column;
        }
        .section__title h3 {
            font-weight: 600;
            font-size: 36px;
            line-height: 42px;
            text-align: center;
        }
        .section_form__agreement {
            padding-left: 1rem;
        }
    }
</style>

