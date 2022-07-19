<template>
    <section id="application" class="section">
        <button class="close" @click="closeModal">
            <img class="close__img" :src="require('/src/assets/modal/close.svg')"/>
        </button>
        <div class="section__title">
            <h3>Оформить договор страхования</h3>
        </div>
        <div class="section__form">
            <h2 class="section__form__title">Страхователь</h2>
            <div class="section__form__row-input">
                <div class="section__form__row-input__field">
                    <label class="label" for="jur_name">Наименование юридического лица/ИП</label>
                    <input
                            id="jur_name"
                            v-model="form.jur_name.text"
                            class="input"
                            type="text"
                            placeholder="САО «ВСК»"
                            :class="{ 'input-error': form.jur_name.error }"
                            @input="form.jur_name.error = false"
                            @keypress="onlyRusWords"/>
                </div>
            </div>
            <div class="section__form__row-input">
                <div class="section__form__row-input__field">
                    <label class="label" for="kpp">Номер КПП</label>
                    <input
                            id="kpp"
                            v-model="form.kpp.text"
                            maxlength="9"
                            class="input"
                            type="text"
                            placeholder="123456789"
                            :class="{ 'input-error': form.kpp.error }"
                            @input="form.kpp.error = false"
                            @keypress="onlyNumbers"/>
                </div>
                <div class="section__form__row-input__field">
                    <label class="label" for="inn">Номер ИНН</label>
                    <input
                            id="inn"
                            v-model="form.inn.text"
                            maxlength="10"
                            class="input"
                            type="text"
                            placeholder="1234567890"
                            :class="{ 'input-error': form.inn.error }"
                            @input="form.inn.error = false"
                            @keypress="onlyNumbers"/>
                </div>
            </div>
            <div class="section__form__row-input">
                <div class="section__form__row-input__field">
                    <label class="label" for="fio">В лице (ФИО)</label>
                    <input
                            id="fio"
                            v-model="form.fio.text"
                            class="input"
                            type="text"
                            placeholder="Иванова Ивана Ивановича"
                            :class="{ 'input-error': form.fio.error }"
                            @input="form.fio.error = false"
                            @keypress="onlyRusWords"/>
                </div>
                <div class="section__form__row-input__field">
                    <label class="label" for="position">Должность</label>
                    <input
                            id="position"
                            v-model="form.position.text"
                            class="input"
                            type="text"
                            placeholder="Исполнительный директор"
                            :class="{ 'input-error': form.position.error }"
                            @input="form.position.error = false"
                            @keypress="onlyRusWords"/>
                </div>
            </div>
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
            <div class="section__form__row-input">
                <div class="section__form__row-input__field">
                    <label class="label" for="document_type">Доверенность, ОГРН/Устав</label>
                    <v-select
                            id="document_type"
                            v-model="form.document_type.text"
                            solo
                            class="select"
                            :class="{ 'input-error': form.document_type.error }"
                            :items="['Доверенность/ОГРН', 'Устав']"
                            label="Выбрать"
                            @input="form.document_type.error = false"></v-select>
                </div>
                <div
                        v-if="form.document_type.text === 'Доверенность/ОГРН'"
                        class="section__form__row-input__field">
                    <label class="label" for="document_number">Номер</label>
                    <input
                            id="document_number"
                            v-model="form.document_number.text"
                            class="input"
                            type="text"
                            placeholder="123"
                            @keypress="onlyNumbers"/>
                </div>
                <div
                        v-if="form.document_type.text === 'Доверенность/ОГРН'"
                        class="section__form__row-input__field">
                    <label class="label" for="menu">От какого числа</label>
                    <v-menu
                            id="menu"
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="auto">
                        <template #activator="{ on, attrs }">
                            <v-text-field
                                    :value="
									form.document_date.text
										? new Date(form.document_date.text).toLocaleDateString()
										: ''
								"
                                    class="select"
                                    label="01.01.2022"
                                    readonly
                                    solo
                                    v-bind="attrs"
                                    v-on="on"></v-text-field>
                        </template>
                        <v-date-picker
                                v-model="form.document_date.text"
                                color="blue darken-2"
                                no-title
                                scrollable
                                locale="ru-RU"
                                @input="menu = false">
                        </v-date-picker>
                    </v-menu>
                </div>
            </div>
            <h2 class="section__form__subtitle">Юридический адрес страхователя</h2>
            <div class="section__form__row-input">
                <div class="section__form__row-input__field">
                    <label class="label" for="jur_index">Индекс</label>
                    <input
                            id="jur_index"
                            v-model="form.jur_index.text"
                            style="flex-shrink: 6"
                            class="input"
                            type="text"
                            placeholder="123456"
                            :class="{ 'input-error': form.jur_index.error }"
                            @input="form.jur_index.error = false"
                            @keypress="onlyNumbers"/>
                </div>
                <div class="section__form__row-input__field">
                    <label class="label" for="jur_city">Город</label>
                    <input
                            id="jur_city"
                            v-model="form.jur_city.text"
                            style="flex-shrink: 2"
                            class="input"
                            type="text"
                            placeholder="Москва"
                            :class="{ 'input-error': form.jur_city.error }"
                            @input="form.jur_city.error = false"
                            @keypress="onlyRusWords"/>
                </div>
            </div>
            <div class="section__form__row-input">
                <div style="flex-shrink: 3" class="section__form__row-input__field">
                    <label class="label" for="jur_street">Улица</label>
                    <input
                            id="jur_street"
                            v-model="form.jur_street.text"
                            class="input"
                            type="text"
                            placeholder="ул. Пионерская"
                            :class="{ 'input-error': form.jur_street.error }"
                            @input="form.jur_street.error = false"
                            @keypress="onlyRusWords"/>
                </div>
                <div style="flex-shrink: 3" class="section__form__row-input__field">
                    <label class="label" for="jur_house">Дом, корпус, строение</label>
                    <input
                            id="jur_house"
                            v-model="form.jur_house.text"
                            class="input"
                            type="text"
                            :class="{ 'input-error': form.jur_house.error }"
                            placeholder="12, корпус 1, строение 1"
                            @input="form.jur_house.error = false"/>
                </div>
                <div style="flex-shrink: 4" class="section__form__row-input__field">
                    <label class="label" for="jur_flat">Помещение</label>
                    <input
                            id="jur_flat"
                            v-model="form.jur_flat.text"
                            class="input"
                            :class="{ 'input-error': form.jur_flat.error }"
                            type="text"
                            placeholder="1"
                            @input="form.jur_flat.error = false"/>
                </div>
            </div>
            <h2 class="section__form__title">Территория страхования</h2>
            <h2 class="section__form__subtitle">Территория в пределах объекта недвижимого имущества</h2>
            <div class="section__form__row-input">
                <div class="section__form__row-input__field">
                    <label class="label" for="name">Наименование (нежилого помещения)</label>
                    <input
                            id="name"
                            v-model="form.name.text"
                            class="input"
                            :class="{ 'input-error': form.name.error }"
                            type="text"
                            placeholder="Торговое помещение"
                            @input="form.name.error = false"
                            @keypress="onlyRusWords"/>
                </div>
                <div class="section__form__row-input__field">
                    <label class="label" for="object_area">Площадью</label>
                    <input
                            id="object_area"
                            v-model="form.object_area.text"
                            style="flex-shrink: 2"
                            class="input"
                            :class="{ 'input-error': form.object_area.error }"
                            type="text"
                            placeholder="65 кв. м"
                            @input="form.object_area.error = false"
                            @keypress="onlyNumbers"/>
                </div>
            </div>
            <div class="section__form__row-input">
                <div class="section__form__row-input__field">
                    <label class="label" for="index">Индекс</label>
                    <input
                            id="index"
                            v-model="form.index.text"
                            style="flex-shrink: 6"
                            class="input"
                            :class="{ 'input-error': form.index.error }"
                            type="text"
                            placeholder="123456"
                            @input="form.index.error = false"
                            @keypress="onlyNumbers"/>
                </div>
                <div class="section__form__row-input__field">
                    <label class="label" for="city">Город</label>
                    <input
                            id="city"
                            v-model="form.city.text"
                            style="flex-shrink: 2"
                            class="input"
                            :class="{ 'input-error': form.city.error }"
                            type="text"
                            placeholder="Москва"
                            @input="form.city.error = false"
                            @keypress="onlyRusWords"/>
                </div>
            </div>
            <div class="section__form__row-input">
                <div style="flex-shrink: 3" class="section__form__row-input__field">
                    <label class="label" for="street">Улица</label>
                    <input
                            id="street"
                            v-model="form.street.text"
                            class="input"
                            :class="{ 'input-error': form.street.error }"
                            type="text"
                            placeholder="ул. Почтовая"
                            @input="form.street.error = false"
                            @keypress="onlyRusWords"/>
                </div>
                <div style="flex-shrink: 3" class="section__form__row-input__field">
                    <label class="label" for="house">Дом, корпус, строение</label>
                    <input
                            id="house"
                            v-model="form.house.text"
                            class="input"
                            :class="{ 'input-error': form.house.error }"
                            type="text"
                            placeholder="12, корпус 1, строение 1"
                            @input="form.house.error = false"/>
                </div>
                <div style="flex-shrink: 4" class="section__form__row-input__field">
                    <label class="label" for="flat">Помещение</label>
                    <input
                            id="flat"
                            v-model="form.flat.text"
                            class="input"
                            :class="{ 'input-error': form.flat.error }"
                            type="text"
                            placeholder="1"
                            @input="form.flat.error = false"/>
                </div>
            </div>
            <div class="section__form__row-input">
                <div class="section__form__row-input__field">
                    <label class="label" for="number_of_floors">Этажей в здании</label>
                    <input
                            id="number_of_floors"
                            v-model="form.number_of_floors.text"
                            class="input"
                            :class="{ 'input-error': form.number_of_floors.error }"
                            type="text"
                            placeholder="3"
                            @keypress="onlyNumbers"
                            @input="form.number_of_floors.error = false"/>
                </div>
                <div class="section__form__row-input__field">
                    <label class="label" for="floor">Этаж помещения</label>
                    <input
                            id="floor"
                            v-model="form.floor.text"
                            class="input"
                            :class="{ 'input-error': form.floor.error }"
                            type="text"
                            placeholder="1"
                            @keypress="onlyNumbers"
                            @input="form.floor.error = false"/>
                </div>
            </div>
            <div class="section__form__row-input">
                <div class="section__form__row-input__field">
                    <label class="label" for="items">Товарные запасы</label>
                    <input
                            id="items"
                            v-model="form.items.text"
                            class="input"
                            type="text"
                            placeholder="инвентарь, товары в обороте, расходные материалы и запасы"
                            :class="{ 'input-error': form.items.error }"
                            @input="form.items.error = false"
                            @keypress="onlyRusWords"/>
                </div>
            </div>
            <div class="flex-row buttons">
                <button
                        class="slider__item-btn"
                        :disabled="loadingButton"
                        :class="{ loading: loadingButton }"
                        @click="sendPost">
                    <span class="btn__text"> Оформить </span>
                    <!--				<img :src="require('@/assets/fat-line-btn.svg')" class="btn__fat-line" />-->
                    <!--				<img :src="require('@/assets/thin-line-btn.svg')" class="btn__thin-line" />-->
                </button>
                <div class="draft">
                    <button
                        class="slider__item-btn"
                        :disabled="loadingButton"
                        :class="{ loading: loadingButton }"
                        @click="getPDF">
                    <span class="btn__text"> Черновик договора </span>
                    <!--				<img :src="require('@/assets/fat-line-btn.svg')" class="btn__fat-line" />-->
                    <!--				<img :src="require('@/assets/thin-line-btn.svg')" class="btn__thin-line" />-->
                </button>
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <button class="question"
                                    v-bind="attrs"
                                    v-on="on">
                                i
                            </button>
                        </template>
                        <span class="tooltip"
                        >нажимая данную кнопку, вы даете согласие на<br> отправку вам копии договора на почту,<br> указанную в форме, а также открытие ее в<br> новом браузерном окне</span>
                    </v-tooltip>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapActions} from 'vuex'
    import Inputmask from 'inputmask'

    export default {
        name: 'FormApplication',
        components: {},
        props: {
            program: null
        },
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
                        require: true,
                    },
                    email: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    inn: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    kpp: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    position: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    document_type: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    document_number: {
                        text: '',
                        error: false,
                        require: false,
                    },
                    document_date: {
                        text: '',
                        error: false,
                        require: false,
                    },
                    name: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    jur_index: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    jur_city: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    jur_street: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    jur_house: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    jur_flat: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    jur_name: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    index: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    city: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    street: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    house: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    flat: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    object_area: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    number_of_floors: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    floor: {
                        text: '',
                        error: false,
                        require: true,
                    },
                    items: {
                        text: '',
                        error: false,
                        require: true,
                    },
                },
                menu: false,
                loadingButton: false,
                temp_data: null,
                policy_object: null,
            }
        },

        mounted() {
            // const emailMask = new Inputmask({
            //     mask: '*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]',
            //     greedy: false,
            // })
            // emailMask.mask(this.$refs.email)

            const phoneMask = new Inputmask({
                mask: '+79999999999',
                greedy: false,
            })
            phoneMask.mask(this.$refs.phone)
        },
        methods: {
            ...mapActions({
                BUY_POLICY: 'BUY_POLICY',
                GET_DRAFT: 'GET_DRAFT',
                BUY_READY_POLICY: 'BUY_READY_POLICY',
            }),
            closeModal() {
                this.$emit('hide', true)
            },
            onlyNumbers(event) {
                const regexp = /[0-9]/i
                if (!regexp.test(event.key)) {
                    event.preventDefault()
                }
            },
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
                                        element.text.length < 5)))
                        ) {
                            element.error = true
                            error = true
                        }
                    }
                }

                return error
            },
            async getPDF() {

                if (!this.checkErrors()) {
                    const data = {
                        fio: this.form.fio.text,
                        phone: this.form.phone.text,
                        email: this.form.email.text,
                        jur_index: this.form.jur_index.text,
                        jur_city: this.form.jur_city.text,
                        jur_street: this.form.jur_street.text,
                        jur_house: this.form.jur_house.text,
                        jur_flat: this.form.jur_flat.text,
                        jur_name: this.form.jur_name.text,
                        inn: this.form.inn.text,
                        kpp: this.form.kpp.text,
                        position: this.form.position.text,
                        document_type: this.form.document_type.text,
                        document_number: this.form.document_number.text,
                        document_date: this.form.document_date.text,
                        name: this.form.name.text,
                        index: this.form.index.text,
                        city: this.form.city.text,
                        street: this.form.street.text,
                        house: this.form.house.text,
                        flat: this.form.flat.text,
                        object_area: this.form.object_area.text,
                        number_of_floors: this.form.number_of_floors.text,
                        floor: this.form.floor.text,
                        items: this.form.items.text,
                        program: this.program,
                        return_url: 'https://vsk-iid.ru/success',
                        fail_url: 'https://vsk-iid.ru/fail',
                    }
                    this.loadingButton = true
                    const res = await this.GET_DRAFT(data)
                    if (res.status === 200) {
                        this.temp_data=Object.assign({}, data);
                        this.policy_object=res.data
                        window.open('data:application/pdf;base64,'+res.data.policyDraft)
                    } else {
                        alert('Запрос не был обработан.')
                    }
                    this.loadingButton = false
                } else {
                    alert('Проверьте правильность ввода всех полей!')
                }
            },
            async sendPost() {
                if (!this.checkErrors()) {
                    const data = {
                        fio: this.form.fio.text,
                        phone: this.form.phone.text,
                        email: this.form.email.text,
                        jur_index: this.form.jur_index.text,
                        jur_city: this.form.jur_city.text,
                        jur_street: this.form.jur_street.text,
                        jur_house: this.form.jur_house.text,
                        jur_flat: this.form.jur_flat.text,
                        jur_name: this.form.jur_name.text,
                        inn: this.form.inn.text,
                        kpp: this.form.kpp.text,
                        position: this.form.position.text,
                        document_type: this.form.document_type.text,
                        document_number: this.form.document_number.text,
                        document_date: this.form.document_date.text,
                        name: this.form.name.text,
                        index: this.form.index.text,
                        city: this.form.city.text,
                        street: this.form.street.text,
                        house: this.form.house.text,
                        flat: this.form.flat.text,
                        object_area: this.form.object_area.text,
                        number_of_floors: this.form.number_of_floors.text,
                        floor: this.form.floor.text,
                        items: this.form.items.text,
                        program: this.program,
                        return_url: 'https://vsk-iid.ru/success',
                        fail_url: 'https://vsk-iid.ru/fail',
                    }
                    this.loadingButton = true
                    if (this.policy_object!==null&&JSON.stringify(this.temp_data)===JSON.stringify(data)) {
                        const data={
                            amount: this.policy_object.amount,
                            policyId: this.policy_object.policyId,
                            policyNumber: this.policy_object.policyNumber,
                            phone: this.form.phone.text,
                            bpId: this.policy_object.bpId,
                            return_url: 'https://vsk-iid.ru/success',
                            fail_url: 'https://vsk-iid.ru/fail',
                        }
                        const res = await this.BUY_READY_POLICY(data)
                        if (res.status === 200) {
                            window.open(res.data, '_self', false)
                        } else {
                            alert('Запрос не был обработан.')
                        }
                    }
                    else {
                        const res = await this.BUY_POLICY(data)
                        if (res.status === 200) {
                            window.open(res.data, '_self', false)
                        } else {
                            alert('Запрос не был обработан.')
                        }

                    }

                    this.loadingButton = false
                } else {
                    alert('Проверьте правильность ввода всех полей!')
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
    .tooltip {
        font-size: 1rem;
        color: #ffffff;
        text-align: justify;
    }
    .draft {
        display: flex;
        flex-direction: row;
        width: 312px;
    }
    .question {
        border-radius: 50%;
        width: 32px;
        height:  32px;
        font-size: 24px;

        font-family: 'FreeSet-Bold', arial;
        color: #0972ba;
        text-align: center;
        border-width: 2px;
        border-style: solid;
        border-color: #0972ba;

    }
    .buttons {
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
    }

    .close {
        z-index: 203;
        position: absolute;
        top: 2%;
        left: 92%;
        width: 3rem;
        height: 3rem;
        background: #ffffff;
        border: 1px solid #dfdfdf;
        box-shadow: inset 0px 3px 10px rgba(0, 0, 0, 0.25);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
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
        min-width: 280px;
        width: 280px;
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
        .buttons {
            width: 100%;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;
            padding-left: 7%;
        }
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
