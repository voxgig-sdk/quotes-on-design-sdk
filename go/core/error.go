package core

type QuotesOnDesignError struct {
	IsQuotesOnDesignError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewQuotesOnDesignError(code string, msg string, ctx *Context) *QuotesOnDesignError {
	return &QuotesOnDesignError{
		IsQuotesOnDesignError: true,
		Sdk:              "QuotesOnDesign",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *QuotesOnDesignError) Error() string {
	return e.Msg
}
