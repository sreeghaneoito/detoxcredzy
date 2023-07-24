export interface AlertProps {
  type: 'warning' | 'error' | 'success';
  heading?: string;
  desc?: string;
}

export interface AppHeaderProps {
  type: 'withNumber' | 'withProfile' | 'withback' | 'none';
  testid?: string;
}

export interface HeaderwithBackProps {
  /**
   * @name TriggerClick
   * @description The function that trigger on the button click
   * @returns function
   */
  triggerClick: () => void;

  /**
   * @name heading
   * @description The Text that dispaly on the heading
   */
  heading?: String;
}

export interface BottomOptionProps {
  buttonAction: () => void;
  ghostAction: () => void;
  mainlabel: string;
  ghostlabel: string;
  loading?: boolean;
  backButtonDisabled?: boolean;
}

export interface ButtonProps {
  type?: 'primary' | 'ghost' | 'danger';
  label: string;
  Customstyle?: {};
  triggerclick: () => void;
  disabled?: boolean;
  testid?: String;
  loading?: boolean;
}

export interface CardProps {
  children: any;
}

export interface BlockChartProps {
  max: number;
  val: number | undefined;
}

export interface CheckBoxGroupProps {
  label: String;
  checkboxdata: {name: String; isSelected: boolean}[];
  testid?: string;
}

export interface DatePickerProps {
  label: string;
  testid?: string;
  date: Date;
  setDate?: any;
  errorText: string;
}

export interface DropDownProps {
  data: string[];
}
