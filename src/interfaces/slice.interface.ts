import {userDetails} from './apiresponse.interface';

export type authentication = {
  login: {
    response: {};
    loading: boolean;
  };
  logout: {
    response: {};
    loading: boolean;
  };
  updatePassword: {
    type: 'email' | 'token';
    payload: {
      email?: string;
      password?: string;
    };
    loading: boolean;
    response: {};
    success: boolean;
  };
  updateEmail: {
    loading: boolean;
    response: {};
    payload: {
      password: string;
      email: {
        address: string;
      };
    };
  };
  updateEmailToken: {
    loading: boolean;
    response: {};
  };
};

export type bubbleanimation = {
  currentPosition: number;
};

export type dashboard = {
  status: string;
};

export type onboardflow = {
  onboardState?: 'character' | 'capital' | 'capacity';
  onboardpagestatus?: 'welcome' | 'form' | 'complete';
  progress?: number;
};

export type user = {
  usertoken?: string;
  userdetails?: userDetails | {};
  loading?: boolean;
  loggedin?: boolean;
  showWelcomeNote?: boolean;
  needBioMetric?: boolean;
  refreshtoken?: '';
};

export type registration = {
  registerEmail: {
    response: any;
    loading: boolean;
  };
  registerPassword: {
    response: any;
    loading: boolean;
  };
  userDetails: {
    email: string;
    firstname: string;
    lastname: string;
    ssn?: string;
  };
  updateUser: {
    response: any;
    loading: boolean;
  };
  deleteUser: {
    response: any;
    loading: boolean;
  };
  linktopop: {
    response: any;
    linkinloader: boolean;
  };
};
export type utils = {
  apploaded: boolean;
};
export type scoreWatcher = {
  dashboardData: {
    capital: number | null;
    capacity: number | null;
    user_goal: string | null;
    questionnaire: {
      scores: {
        transunion: string;
        equifax: string;
        experian: string;
      };
      capacity: {
        monthly_debt: string;
        monthly_income: string;
      };
      capital: {
        f401k: string;
        other: string;
        savings: string;
        stocks_and_bonds: string;
        real_estate: string;
      };
    } | null;
    timestamp: string | null;
  };
  swa: {
    userId: string;
    clientKey: string;
    last_report_product: string;
  };
  swareport: {
    score: string;
    total_balances: string;
    monthly_payments: string;
  };
  loading: boolean;
  credzyunavailable: boolean;
  dashboardDataStatusCode: number;
};
export type app = {
  appdetails: {
    response: {
      ios_version: string | null;
      android_version: string | null;
    };
    loading: boolean;
  };
};

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// KBA
// ----------------------------------------------------------------
// ----------------------------------------------------------------

export type createwsaPayload = {
  /**
   * User SSN
   */
  ssn: string;
  /**
   * User first name
   */
  first_name: string;
  /**
   * User last name
   */
  last_name: string;
  /**
   * User Date of Birth
   */
  dob: string;
  /**
   * User address
   */
  address: {
    /**
     * Street
     */
    street: string;
    /**
     * City
     */
    city: string;
    /**
     * State
     */
    state: string;
    /**
     * zip code
     */
    zip: string;
  };
};
export type kba = {
  /**
   * Create a new kba user
   */
  createkba: {
    /**
     * Loading or not
     */
    loading: boolean;
    /**
     * The Payload from user form
     */
    data: createwsaPayload;
    /**
     * Api Response
     */
    response?: any;
  };
  /**
   * Questions for Creating KBA
   */
  questions: {
    /**
     * Questions from API
     */
    response: {};
    /**
     * Loading or not
     */
    loading: boolean;
  };
  /**
   * Submit user answers to KBA
   */
  submitAnswers: {
    /**
     * Object of answers from the form
     */
    answers: {
      [key: string]: string;
    };
    /**
     * Response from API
     */
    response: {};
    /**
     * loading or not
     */
    loading: boolean;
    /**
     * Response status code
     */
    statusCode: number;
  };
};

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// Partners
// ----------------------------------------------------------------
// ----------------------------------------------------------------

export type partnerIndividuals = {
  cs_avatar?: string;
  cs_call_number?: number | string;
  cs_display_name?: string;
  cs_email_address?: string;
  cs_email_name?: string;
  cs_nickname?: string;
  cs_slogan?: string;
  cs_text_number?: string;
  cs_website?: string;
  cs_work_hours?: string;
  id?: number | string;
  internal_name?: string;
  name?: string;
  entity_relation_type_id?: number;
  related_cs_override?: boolean;
  related_id?: number;
  related_name?: string;
  related_type?: string;
  related_type_role_id?: string;
  related_type_role_name?: string;
}[];
export type profile = {
  archived: number;
  business_id: number;
  created_at: string;
  display_id: number;
  display_name: string;
  dob: string;
  email: {
    address: string;
    action: number;
    verified_at: string;
  };
  external_fk: string;
  id: number;
  name: {
    prefix: string;
    first: string;
    middle: string;
    last: string;
    suffix: string;
  };
  partner_id: number;
  phone: {
    country_id: string;
    area_code: string;
    number: string;
    extension: string;
    verified_at: string;
    stop_call_at: string;
    stop_text_at: string;
  };
  scheme_id: 6;
  scheme_name: string;
  ssn: string;
  // profile specialist type ⤴️
  profile_specialists: partnerIndividuals;
};
export type profiles = {
  archived: number;
  business_id: number;
  created_at: string;
  display_id: number;
  display_name: string;
  dob: string;
  email: {
    address: string;
    action: number;
    verified_at: string;
  };
  external_fk: string;
  id: number;
  name: {
    prefix: string;
    first: string;
    middle: string;
    last: string;
    suffix: string;
  };
  partner_id: number;
  phone: {
    country_id: string;
    area_code: string;
    number: string;
    extension: string;
    verified_at: string;
    stop_call_at: string;
    stop_text_at: string;
  };
  scheme_id: 6;
  scheme_name: string;
  ssn: string;
  // profile specialist type ⤴️
  profile_specialists: partnerIndividuals;
}[];

export type partners = {
  archived: number;
  business_external_application_id: number;
  business_id: number;
  contact_email: string;
  contact_name: string;
  contact_phone: string;
  created_at: string;
  description: string;
  external_application_id: number;
  external_application_key: string;
  external_application_name: string;
  id: number;
  is_primary: number;
  logo: string;
  name: string;
  scheme_id: number;
  scheme_name: string;
  // department type ⤴️
  departments: partnerIndividuals;
  // profile type ⤴️
  profile: profile;
  profiles: profiles;
}[];

export type partnersType = {
  partners: {
    loading: boolean;
    data: partners;
    partnersStatusCode: number;
  };
};
