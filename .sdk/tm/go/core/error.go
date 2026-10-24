package core

import "encoding/json"

type QuotesOnDesignError struct {
	IsQuotesOnDesignError bool
	Sdk                string
	Code               string
	Msg                string
	// Reachable for a debugger, invisible to a serialiser: the context holds
	// the live spec and options, and an error is what gets logged.
	Ctx    *Context `json:"-"`
	Result any
	Spec   any
	// The HTTP status, -1 when there was no response.
	Status int
}

func NewQuotesOnDesignError(code string, msg string, ctx *Context) *QuotesOnDesignError {
	return &QuotesOnDesignError{
		IsQuotesOnDesignError: true,
		Sdk:                "QuotesOnDesign",
		Code:               code,
		Msg:                msg,
		Ctx:                ctx,
		Status:             -1,
	}
}

func (e *QuotesOnDesignError) NotFound() bool {
	return 404 == e.Status
}

func (e *QuotesOnDesignError) Error() string {
	return e.Msg
}

// What makeError attached is already cleaned; the context is not part of
// the record.
func (e *QuotesOnDesignError) Record() map[string]any {
	return map[string]any{
		"sdk":     e.Sdk,
		"code":    e.Code,
		"message": e.Msg,
		"status":  e.Status,
		"result":  e.Result,
		"spec":    e.Spec,
	}
}

func (e *QuotesOnDesignError) MarshalJSON() ([]byte, error) {
	return json.Marshal(e.Record())
}
