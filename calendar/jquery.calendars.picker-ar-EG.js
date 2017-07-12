/* http://keith-wood.name/calendars.html
   Arabic localisation for calendars datepicker for jQuery.
   Mahmoud Khaled -- mahmoud.khaled@badrit.com
   NOTE: monthNames are the new months names */
(function($) {
	$.calendarsPicker.regionalOptions['ar-EG'] = {
		currentText: 'اليوم', currentStatus: 'عرض الشهر الحالي',
		todayText: 'اليوم', todayStatus: 'عرض الشهر الحالي',
		clearText: 'مسح', clearStatus: 'امسح التاريخ الحالي',
		closeText: 'إغلاق', closeStatus: 'إغلاق بدون حفظ',
		yearStatus: 'عرض سنة آخرى', monthStatus: 'عرض شهر آخر',
		weekText: 'أسبوع', weekStatus: 'أسبوع السنة'
	};
	$.calendarsPicker.setDefaults($.calendarsPicker.regionalOptions['ar-EG']);
})(jQuery);
