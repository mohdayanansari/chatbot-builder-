const data = {
  id: "string",
  name: "string",
  flowNodes: [
    {
      id: "string",
      isStartNode: true,
      flowNodePosition: {
        posX: 0,
        posY: 0,
      },
      flowNodeType: "Message",
      flowReplies: [
        {
          flowReplyType: "string",
          data: "string",
          caption: "string",
          filename: "string",
          provider: {
            name: "string",
          },
        },
      ],
      variable: "string",
    },
    {
      id: "string",
      isStartNode: true,
      flowNodePosition: {
        posX: 0,
        posY: 0,
      },
      flowNodeType: "Question",
      flowReplies: [
        {
          flowReplyType: "string",
          data: "string",
          caption: "string",
          filename: "string",
          provider: {
            name: "string",
          },
        },
      ],
      variable: "string",
      validator: [
        {
          fallback: "string",
          failsCount: 0,
          type: "StringValidation",
          regex: "string",
        },
        {
          fallback: "string",
          failsCount: 0,
          type: "PasswordValidation",
          regex: false,
          oneCapitalLetter: true,
          oneNumber: true,
          oneSpecialCharacter: true,
          minLength: 0,
          maxLength: 0,
        },
        {
          fallback: "string",
          failsCount: 0,
          type: "NumberValidation",
          regex: "string",
          minLength: 0,
          maxLength: 0,
          minValue: 0,
          maxValue: 0,
        },
        {
          fallback: "string",
          failsCount: 0,
          type: "EmailValidation",
          regex: "string",
          checkBlackList: true,
          checkDNS: true,
          smtpHeloHost: "string",
          smtfromAddress: "string",
        },
        {
          fallback: "string",
          failsCount: 0,
          type: "TimeValidation",
          regex: "string",
          format: "string",
          minValue: "2022-04-02T04:36:23.519137",
          maxValue: "string",
        },
        {
          fallback: "string",
          failsCount: 0,
          type: "DateTimeValidation",
          regex: "string",
          format: "string",
          minValue: "2022-04-02T04:36:23.519137",
          maxValue: "string",
        },
        {
          fallback: "string",
          failsCount: 0,
          type: "DateValidation",
          regex: "string",
          format: "string",
          minValue: "2022-04-02T04:36:23.519137",
          maxValue: "string",
        },
        {
          fallback: "string",
          failsCount: 0,
          type: "ImageValidation",
        },
        {
          fallback: "string",
          failsCount: 0,
          type: "VideoValidation",
        },
        {
          fallback: "string",
          failsCount: 0,
          type: "DocumentValidation",
        },
        {
          fallback: "string",
          failsCount: 0,
          type: "AudioValidation",
        },
        {
          fallback: "string",
          failsCount: 0,
          type: "ContactValidation",
        },
        {
          fallback: "string",
          failsCount: 0,
          type: "LocationValidation",
        },
      ],
    },
    {
      id: "string",
      isStartNode: true,
      flowNodePosition: {
        posX: 0,
        posY: 0,
      },
      flowNodeType: "InteractiveList",
      body: "string",
      variable: "string",
      header: {
        type: "text",
        text: "string",
      },
      buttonText: "string",
      section: [
        {
          id: "string",
          title: "string",
          rows: [
            {
              id: "string",
              title: "string",
              description: "",
              nodeResultId: "string",
            },
          ],
        },
      ],
    },
    {
      id: "string",
      isStartNode: true,
      flowNodePosition: {
        posX: 0,
        posY: 0,
      },
      flowNodeType: "InteractiveButton",
      body: "string",
      variable: "string",
      header: {
        type: "string",
        text: "string",
        media: "string",
      },
      buttons: [
        {
          id: "string",
          text: "string",
          nodeResultId: "string",
        },
      ],
    },
    {
      id: "string",
      isStartNode: true,
      flowNodePosition: {
        posX: 0,
        posY: 0,
      },
      flowNodeType: "Condition",
      conditions: [
        {
          id: "string",
          flowConditionType: "string",
          variable: "string",
          value: "string",
        },
      ],
      result: {
        yResultNodeId: "string",
        nResultNodeId: "string",
      },
      conditionOperator: "string",
    },
    {
      id: "string",
      isStartNode: true,
      flowNodePosition: {
        posX: 0,
        posY: 0,
      },
      flowNodeType: "UpdateAttribute",
      attributeVariables: [
        {
          type: "string",
          name: "string",
          value: "string",
        },
      ],
      variableTypeCasting: [
        {
          variableName: "string",
          sourceType: "string",
          targetType: "string",
        },
      ],
    },
    {
      id: "string",
      isStartNode: true,
      flowNodePosition: {
        posX: 0,
        posY: 0,
      },
      flowNodeType: "TimeDelay",
      delaySeconds: 0,
    },
    {
      id: "string",
      isStartNode: true,
      flowNodePosition: {
        posX: 0,
        posY: 0,
      },
      flowNodeType: "Webhook",
      methodType: "string",
      url: "string",
      headers: [
        {
          headerName: "string",
          headerValue: "string",
        },
      ],
      body: "string",
      expectedStatuses: [
        {
          id: "string",
          statusCode: 0,
          nodeResultId: "string",
          isDefault: true,
        },
      ],
      responceVariables: [
        {
          type: "string",
          name: "string",
          path: "string",
        },
      ],
    },
  ],
  flowEdges: [
    {
      id: "string",
      sourceNodeId: "string",
      targetNodeId: "string",
    },
  ],
  state: "string",
  dialog360: {
    api_key: "string",
    markAsRead: false,
  },
  multiSession: true,
  timeLimit: 0,
};

export default data;
