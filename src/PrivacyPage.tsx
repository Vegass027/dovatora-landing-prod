import { Shield, Lock, Eye, Trash2, Phone, Mail, Clock } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="text-xl md:text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Автомойка "Фреш"
            </a>
            <a
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              ← Вернуться на главную
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Политика конфиденциальности
            </h1>
            <p className="text-gray-600 text-base md:text-lg">
              Дата: 17.02.2026
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 lg:p-12 space-y-8 md:space-y-12">
            {/* Section 1 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  1. Общие положения
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed pl-0 md:pl-14">
                Настоящая Политика определяет порядок обработки и защиты персональных данных пользователей сервиса online.fresh-moyka.ru (далее — Сервис).
              </p>
              <p className="text-gray-700 leading-relaxed mt-3 pl-0 md:pl-14">
                Используя Сервис, вы соглашаетесь с условиями данной Политики.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Eye className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  2. Какие данные мы собираем
                </h2>
              </div>
              <ul className="space-y-2 md:space-y-3 pl-0 md:pl-14">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Имя и фамилия</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Номер телефона</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Адрес электронной почты</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Марка и номер автомобиля</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>История посещений и заказов</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  3. Для чего используем данные
                </h2>
              </div>
              <ul className="space-y-2 md:space-y-3 pl-0 md:pl-14">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Запись на услуги автомойки и шиномонтажа</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Напоминания о предстоящих визитах</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Информирование о статусе заказа</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Ведение истории обслуживания</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Связь с вами по вопросам оказания услуг</span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Lock className="w-5 h-5 md:w-6 md:h-6 text-yellow-600" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  4. Как мы храним данные
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed pl-0 md:pl-14">
                Данные хранятся на защищённых серверах с использованием шифрования и ограниченным доступом. Мы применяем современные меры безопасности для защиты ваших данных от несанкционированного доступа.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  5. Кому передаём данные
                </h2>
              </div>
              <div className="pl-0 md:pl-14 space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  Мы <strong className="text-red-600">не передаём и не продаём</strong> ваши данные третьим лицам.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Данные доступны только сотрудникам автомойки для выполнения услуг.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  6. Ваши права
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3 pl-0 md:pl-14">
                Вы имеете право:
              </p>
              <ul className="space-y-2 md:space-y-3 pl-0 md:pl-14">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Запросить копию своих данных</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Исправить неточные данные</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Удалить свои данные из системы</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Отозвать согласие на обработку</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3 pl-0 md:pl-14">
                Для реализации прав свяжитесь с нами по контактам ниже.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  7. Срок хранения данных
                </h2>
              </div>
              <ul className="space-y-2 md:space-y-3 pl-0 md:pl-14">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Данные хранятся в течение срока использования Сервиса и 3 года после последнего визита для ведения истории обслуживания</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>После удаления аккаунта данные удаляются в течение 30 дней</span>
                </li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  8. Контакты
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 pl-0 md:pl-14">
                По вопросам обработки персональных данных:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 md:p-6 pl-0 md:pl-14 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <span className="text-gray-600 text-sm">Email:</span>
                    <span className="ml-2 text-gray-900 font-medium">Borec0096@mail.ru</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <span className="text-gray-600 text-sm">Телефон:</span>
                    <span className="ml-2 text-gray-900 font-medium">8 928 270 7976</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  9. Изменения Политики
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed pl-0 md:pl-14">
                Мы можем обновлять Политику. Актуальная версия всегда доступна на этой странице.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 md:py-8 mt-8 md:mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <h3 className="font-bold mb-3 md:mb-4 text-blue-400 text-base md:text-base">Контакты</h3>
              <p className="text-xs md:text-sm text-gray-300">
                г. Ростов-на-Дону, ул. Доватора, 154/3<br />
                8 (928) 193-06-00<br />
                Borec0096@mail.ru
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-3 md:mb-4 text-blue-400 text-base md:text-base">Режим работы</h3>
              <p className="text-xs md:text-sm text-gray-300">
                Ежедневно<br />
                с 8:00 до 18:00
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-3 md:mb-4 text-blue-400 text-base md:text-base">Документы</h3>
              <div className="flex flex-col gap-2 text-xs md:text-sm">
                <a
                  href="/oferta"
                  className="text-left text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Договор оферты
                </a>
                <a
                  href="/privacy"
                  className="text-left text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Политика конфиденциальности
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 md:pt-8 border-t border-gray-700 text-center text-xs md:text-sm text-gray-400">
            <p>© 2026 Автомойка "Фреш". ИП ГАЛКИН В.В. ИНН 616702768541</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
