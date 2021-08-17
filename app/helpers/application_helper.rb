module ApplicationHelper
  def full_error(object)
    return if object.errors&.blank?

    string = ''
    object.errors.each do |e|
      string << e.full_message
    end
    string = string[0...-2]
  end

  def translate_enum(class_name, enum_value)
    I18n.t("enum.#{class_name}.#{enum_value}")
  end

  def get_format(day)
    I18n.l(day, format: :for_element_ui)
  rescue StandardError
    ''
  end

  def reformat_phone(phone)
    phone.first(5) + '*****'
  rescue StandardError
    '**********'
  end
end
